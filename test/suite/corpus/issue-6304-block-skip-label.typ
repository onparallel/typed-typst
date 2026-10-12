// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-6304-block-skip-label.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that labeling is skipped for an empty orphan frame.
#set page(height: 60pt)
A
#block(sticky: true)[B]
#block[C] <label>
