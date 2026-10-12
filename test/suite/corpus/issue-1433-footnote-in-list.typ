// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-1433-footnote-in-list.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that footnotes in lists do not produce extraneous page breaks. The list
// layout itself does not currently react to the footnotes layout, weakening the
// "footnote and its entry are on the same page" invariant somewhat, but at
// least there shouldn't be extra page breaks.
#set page(height: 100pt)
#block(height: 50pt, width: 100%, fill: aqua)

- #footnote[1]
- #footnote[2]
