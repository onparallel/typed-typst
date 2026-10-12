// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case issue-1540-smartquotes-across-newlines.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that smart quotes are inferred correctly across newlines.
"test"#linebreak()"test"

"test"\
"test"
