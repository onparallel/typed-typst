// Typst 0.15.1 test suite: tests/suite/layout/pad.typ, case pad-followed-by-content.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the pad element doesn't consume the whole region.
#set page(height: 6cm)
#align(left)[Before]
#pad(10pt, image("/assets/images/tiger.jpg"))
#align(right)[After]
