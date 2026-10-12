// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-number-width.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test number width.
#text(number-width: "proportional")[0123456789] \
#text(number-width: "tabular")[3456789123] \
#text(number-width: "tabular")[0123456789]
