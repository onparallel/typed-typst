// Typst 0.15.1 test suite: tests/suite/foundations/plugin.typ, case plugin-func, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let p = plugin("/assets/plugins/hello.wasm")
#test(type(p.hello), function)
#test(("a", "b").map(bytes).map(p.double_it), ("a.a", "b.b").map(bytes))
