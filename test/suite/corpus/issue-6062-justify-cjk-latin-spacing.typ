// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case issue-6062-justify-cjk-latin-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test whether cjk-latin-spacing would be stretched evenly when justified.
#set par(justify: true)
あaあ#linebreak(justify: true)
ああaa aaああ#linebreak(justify: true)
