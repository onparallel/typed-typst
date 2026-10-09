// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case issue-80-emoji-linebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that there are no linebreaks in composite emoji (issue #80).
#set page(width: 50pt, height: auto)
#h(99%) 🏳️‍🌈
🏳️‍🌈
