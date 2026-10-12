// Typst 0.15.1 test suite: tests/suite/layout/inline/cjk.typ, case issue-2538-cjk-latin-spacing-before-linebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Issue #2538
#set text(cjk-latin-spacing: auto)

abc字

abc字#linebreak()

abc字#linebreak()
母

abc字\
母
