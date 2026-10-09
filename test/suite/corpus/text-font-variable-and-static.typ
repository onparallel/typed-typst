// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variable-and-static.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This font exists both in its static and variable version.
#set text(font: "Source Serif 4")
Hello _world_ *with* #text(weight: 550)[_Source Serif._]
