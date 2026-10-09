// Typst 0.15.1 test suite: tests/suite/foundations/path.typ, case path, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(
  repr(path("hi/there.txt")),
  "path(\"/tests/suite/foundations/hi/there.txt\")",
)
