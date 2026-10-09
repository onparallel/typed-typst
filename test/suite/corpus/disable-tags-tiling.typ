// Typst 0.15.1 test suite: tests/suite/pdftags/disable.typ, case disable-tags-tiling, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
= Rectangle

#let pat = tiling(size: (20pt, 20pt))[
  - a
  - b
    - c
]
#rect(fill: pat)
