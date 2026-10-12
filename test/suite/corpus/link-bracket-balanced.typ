// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-bracket-balanced.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Verify that brackets are included in links.
https://[::1]:8080/ \
https://example.com/(paren) \
https://example.com/#(((nested))) \
