// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-slashed-zero-and-fractions.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test extra number stuff.
#set text(font: "IBM Plex Serif")
0 vs. #text(slashed-zero: true)[0] \
1/2 vs. #text(fractions: true)[1/2]
