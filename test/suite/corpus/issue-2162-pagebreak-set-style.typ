// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case issue-2162-pagebreak-set-style.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The styles should not be applied to the pagebreak empty page,
// it should only be applied after that.
#pagebreak(to: "even") // We should now skip to page 2

Some text on page 2

#pagebreak(to: "even") // We should now skip to page 4

#set page(fill: orange) // This sets the color of the page starting from page 4
Some text on page 4
