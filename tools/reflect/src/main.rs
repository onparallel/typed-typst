//! Dumps the reflection of Typst's standard library as JSON.
use std::collections::BTreeSet;

use serde_json::{Map, Value as J, json};
use typst::foundations::{Binding, CastInfo, Func, NativeParamInfo, Repr, Scope, Type, Value};
use typst::{Library, LibraryExt};

fn cast(info: &CastInfo) -> J {
    match info {
        CastInfo::Any => json!({ "kind": "any" }),
        CastInfo::Value(v, docs) => json!({
            "kind": "value",
            "type": v.ty().short_name(),
            "repr": v.repr().as_str(),
            "value": serde_json::to_value(v).unwrap_or(J::Null),
            "docs": docs,
        }),
        CastInfo::Type(ty) => json!({ "kind": "type", "type": ty.short_name() }),
        CastInfo::Union(infos) => json!({ "kind": "union", "of": infos.iter().map(cast).collect::<Vec<_>>() }),
    }
}

fn summary(docs: &str) -> String {
    docs.split("\n\n").next().unwrap_or("").replace('\n', " ")
}

fn param(p: &NativeParamInfo) -> J {
    let mut m = Map::new();
    m.insert("name".into(), json!(p.name));
    m.insert("input".into(), cast(&p.input));
    m.insert("positional".into(), json!(p.positional));
    m.insert("named".into(), json!(p.named));
    m.insert("variadic".into(), json!(p.variadic));
    m.insert("required".into(), json!(p.required));
    m.insert("settable".into(), json!(p.settable));
    if let Some(f) = p.default {
        let v = f();
        m.insert("default".into(), json!({ "type": v.ty().short_name(), "repr": v.repr().as_str() }));
    }
    m.insert("docs".into(), json!(summary(p.docs)));
    J::Object(m)
}

struct Out { funcs: Vec<J>, types: Vec<J>, symbols: Vec<J>, seen: BTreeSet<String> }

impl Out {
    fn func(&mut self, path: &str, f: &Func, b: Option<&Binding>) {
        if !self.seen.insert(format!("f:{path}")) { return; }
        self.funcs.push(json!({
            "path": path,
            "category": b.and_then(|b| b.category()).map(|c| c.name()),
            "deprecation": b.and_then(|b| b.deprecation()).map(|d| d.message()),
            "name": f.name(),
            "element": f.to_element().is_some(),
            "contextual": f.contextual(),
            "returns": f.returns().map(cast),
            "params": f.params().filter_map(|p| p.to_native().map(param)).collect::<Vec<_>>(),
            "docs": summary(f.docs().unwrap_or("")),
        }));
        if let Some(scope) = f.scope() { self.scope(path, scope); }
    }
    fn ty(&mut self, path: &str, t: &Type) {
        if !self.seen.insert(format!("t:{path}")) { return; }
        self.types.push(json!({ "path": path, "name": t.short_name(), "constructor": t.constructor().is_ok() }));
        if let Ok(c) = t.constructor() { self.func(&format!("{path}.constructor"), &c, None); }
        self.scope(path, t.scope());
    }
    fn scope(&mut self, base: &str, scope: &Scope) {
        for (name, binding) in scope.iter() {
            let path = if base.is_empty() { name.to_string() } else { format!("{base}.{name}") };
            match binding.read() {
                Value::Func(f) => self.func(&path, f, Some(binding)),
                Value::Type(t) => self.ty(&path, t),
                Value::Module(m) => self.scope(&path, m.scope()),
                Value::Symbol(sym) => {
                    if !self.seen.insert(format!("s:{path}")) { continue; }
                    let variants: Vec<J> = sym
                        .variants()
                        .map(|(variant, value, deprecation)| json!({ "variant": variant.as_str(), "value": value, "deprecation": deprecation }))
                        .collect();
                    self.symbols.push(json!({ "path": path, "variants": variants }));
                }
                _ => {}
            }
        }
    }
}

fn main() {
    let lib = Library::default();
    let mut out = Out { funcs: vec![], types: vec![], symbols: vec![], seen: BTreeSet::new() };
    out.scope("", lib.global.scope());
    // The version as the library itself reports it (`sys.version`).
    let sys = lib.global.scope().get("sys").expect("sys module");
    let Value::Module(sys) = sys.read() else { panic!("sys is not a module") };
    let version = sys.scope().get("version").expect("sys.version").read().clone();
    let Value::Version(version) = version else { panic!("sys.version is not a version") };
    let version: Vec<String> = version.values().iter().map(|v| v.to_string()).collect();
    let key = |v: &J| v["path"].as_str().unwrap_or("").to_string();
    out.funcs.sort_by_key(key);
    out.types.sort_by_key(key);
    out.symbols.sort_by_key(key);
    let doc = json!({ "typst": version.join("."), "functions": out.funcs, "types": out.types, "symbols": out.symbols });
    println!("{}", serde_json::to_string_pretty(&doc).unwrap());
}
