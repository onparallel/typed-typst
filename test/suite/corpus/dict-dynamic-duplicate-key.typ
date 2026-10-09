// Typst 0.15.1 test suite: tests/suite/foundations/dict.typ, case dict-dynamic-duplicate-key, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let a = "hello"
#let b = "world"
#let c = "value"
#let d = "conflict"

#test(((a): b), ("hello": "world"))
#test(((a): 1, (a): 2), ("hello": 2))
#test((hello: 1, (a): 2), ("hello": 2))
#test((a + b: c, (a + b): d, (a): "value2", a: "value3"), ("helloworld": "conflict", "hello": "value2", "a": "value3"))
