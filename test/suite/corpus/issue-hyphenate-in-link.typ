// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case issue-hyphenate-in-link.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(justify: true)

// The `linebreak()` function accidentally generated out-of-order breakpoints
// for links because it now splits on word boundaries. We avoid the link markup
// syntax because it's show rule interferes.
#"http://creativecommons.org/licenses/by-nc-sa/4.0/"
