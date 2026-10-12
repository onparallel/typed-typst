// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-call-body.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test string body.
#text("Text") \
#text(red, "Text") \
#text(font: "Ubuntu", blue, "Text") \
#text([Text], teal, font: "IBM Plex Serif") \
#text(forest, font: "New Computer Modern", [Text]) \
