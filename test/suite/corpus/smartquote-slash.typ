// Typst 0.15.1 test suite: tests/suite/text/smartquote.typ, case smartquote-slash.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that smartquotes can open before non-whitespace if not nested.
"Hello"/"World" \
'"Hello"/"World"' \
""Hello"/"World""
