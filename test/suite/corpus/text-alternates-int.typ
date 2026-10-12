// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case text-alternates-int.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test selecting between multiple alternates.
#set text(font: "Libertinus Serif")
#text(alternates: false, [ß]) vs #text(alternates: true, [ß]) vs #text(alternates: 2, [ß])
