// Typst 0.15.1 test suite: tests/suite/text/shift.typ, case issue-7249-multiple-lookup-tables.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// We increase the font size to make sure the difference is visible in the
// low-resolution reference image.
#set text(font: "Source Serif 4", size: 1.5em)
#set super(typographic: true)

A#super[test] \
A#super[test1] \
A#super[(test)] \
// Source Serif 4 does not support `sups` for backticks, so this should be
// synthesized.
A#super[test\`]
