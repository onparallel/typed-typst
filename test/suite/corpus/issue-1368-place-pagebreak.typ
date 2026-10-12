// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case issue-1368-place-pagebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test placing on an already full page.
// It shouldn't result in a page break.
#set page(height: 40pt)
#block(height: 100%)
#place(bottom + right)[Hello world]
