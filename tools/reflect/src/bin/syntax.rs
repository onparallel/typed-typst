//! Dumps the syntax tree of Typst sources as JSON, one file per line of stdin.
//!
//! Output, one JSON line per input: `{"file": …, "tree": node}`, where a leaf
//! node is `[kind, text]` and an inner node is `[kind, [children…]]`. The tree
//! is lossless: concatenating the leaves gives back the source.
use std::io::{BufRead, Write};

use serde_json::{Value as J, json};
use typst::syntax::SyntaxNode;

fn node(n: &SyntaxNode) -> J {
    let kind = format!("{:?}", n.kind());
    if n.children().len() == 0 {
        json!([kind, n.leaf_text().as_str()])
    } else {
        json!([kind, n.children().map(node).collect::<Vec<_>>()])
    }
}

fn main() {
    let stdin = std::io::stdin();
    let mut out = std::io::stdout().lock();
    for line in stdin.lock().lines() {
        let file = line.unwrap();
        let text = std::fs::read_to_string(&file).unwrap();
        let tree = typst::syntax::parse(&text);
        writeln!(out, "{}", json!({ "file": file, "tree": node(&tree) })).unwrap();
    }
}
