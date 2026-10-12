// Typst 0.15.1 test suite: tests/suite/math/underover.typ, case math-underover-multiline-annotation-align, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
$ x = underbrace(
  "complexity",
  // The alignment points are not shared between body and annotation.
  underbrace(&1+2 \ 3+&4, a b+&c \ d+&e)
) $
