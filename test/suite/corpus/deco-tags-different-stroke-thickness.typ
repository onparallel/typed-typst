// Typst 0.15.1 test suite: tests/suite/pdftags/deco.typ, case deco-tags-different-stroke-thickness, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: underline.with(stroke: 2pt)
thick underlined
#show: underline.with(stroke: 1pt)
thin underlined
