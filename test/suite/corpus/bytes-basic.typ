// Typst 0.15.1 test suite: tests/suite/foundations/bytes.typ, case bytes-basic, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let data = read("/assets/images/rhino.png", encoding: none)
#test(data.len(), 232243)
#test(data.slice(0, count: 5), bytes((137, 80, 78, 71, 13)))
#test(str(data.slice(1, 4)), "PNG")
#test(repr(data), "bytes(232243)")
