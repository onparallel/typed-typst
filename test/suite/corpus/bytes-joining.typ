// Typst 0.15.1 test suite: tests/suite/foundations/bytes.typ, case bytes-joining, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(str({
  bytes("Hello")
  bytes((0x20,))
  bytes("World")
}), "Hello World")
