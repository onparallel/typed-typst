// Typst 0.15.1 test suite: tests/suite/pdftags/logical-children.typ, case logical-children-tags-place-in-tiling, attributes: pdftags pdfstandard(ua-1) empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#rect(width: 90pt, height: 90pt, fill: tiling(size: (30pt, 30pt))[
  #place(float: true, top + right)[hi]
])
