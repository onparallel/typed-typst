// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-alternates-and-stylistic-sets.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test alternates and stylistic sets.
#set text(font: "IBM Plex Serif")
a vs #text(alternates: true)[a] \
ß vs #text(stylistic-set: 5)[ß] \
10 years ago vs #text(stylistic-set: (1, 2, 3))[10 years ago]
