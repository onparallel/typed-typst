// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-ligatures.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test text turning off (standard) ligatures of the font.
#text(ligatures: false)[fi Qu] vs fi Qu \
// Test text turning on historical ligatures of the font.
abstract vs #text(historical-ligatures: true)[abstract] \
// Test text turning on discretionary ligatures of the font.
waltz vs #text(discretionary-ligatures: true)[waltz]
