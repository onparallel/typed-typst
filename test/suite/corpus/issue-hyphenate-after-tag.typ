// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case issue-hyphenate-after-tag.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that an invisible tag does not prevent hyphenation.
#set page(width: 50pt)
#set text(hyphenate: true)
#show "Tree": emph
#show emph: set text(red)
#show emph: it => it + metadata(none)
Treebeard
