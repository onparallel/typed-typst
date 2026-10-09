// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-number-type.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test number type.
#set text(number-type: "old-style")
0123456789 \
#text(number-type: auto)[0123456789]
