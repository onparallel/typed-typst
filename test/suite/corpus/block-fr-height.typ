// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-fr-height.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#rect(height: 10pt, width: 100%)
#align(center, block(height: 1fr, width: 20pt, stroke: 1pt))
#rect(height: 10pt, width: 100%)
