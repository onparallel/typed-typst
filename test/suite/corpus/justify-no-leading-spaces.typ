// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case justify-no-leading-spaces.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that justification cannot lead to a leading space
#set par(justify: true)
#set text(size: 12pt)
#set page(width: 45mm, height: auto)

lorem ipsum 1234, lorem ipsum dolor sit amet

#"  leading whitespace should still be displayed"
