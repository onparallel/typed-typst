// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-set-forces-break.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Set width and height.
// Should result in one high and one wide page.
#set page(width: 80pt, height: 80pt)
#[#set page(width: 40pt);High]
#[#set page(height: 40pt);Wide]

// Flipped predefined paper.
#[#set page(paper: "a11", flipped: true);Flipped A11]
