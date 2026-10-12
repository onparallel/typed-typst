// Typst 0.15.1 test suite: tests/suite/layout/spacing.typ, case issue-4087.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Weak space at the end of the line is removed.
This is the first line #h(2cm, weak: true) A new line

// Non-weak space consumes a specified width and pushes to next line.
This is the first line #h(2cm, weak: false) A new line

// Similarly, weak space at the beginning of the line is removed.
This is the first line \ #h(2cm, weak: true) A new line

// Non-weak-spacing, on the other hand, is not removed.
This is the first line \ #h(2cm, weak: false) A new line
