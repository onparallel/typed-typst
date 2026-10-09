// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-bracket-unbalanced-closing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Check that unbalanced brackets are not included in links.
#[https://example.com/] \
https://example.com/)
