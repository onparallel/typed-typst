// Typst 0.15.1 test suite: tests/suite/foundations/plugin.typ, case plugin-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let p = plugin("/assets/plugins/hello.wasm")
#test(p.hello(), bytes("Hello from wasm!!!"))
#test(p.double_it(bytes("hey!")), bytes("hey!.hey!"))
#test(
  p.shuffle(bytes("value1"), bytes("value2"), bytes("value3")),
  bytes("value3-value1-value2"),
)
