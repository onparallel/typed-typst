// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-5296-block-sticky-weakly-spaced-from-top-of-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 3cm)
#v(2cm, weak: true)

#block(sticky: true)[*A*]

b
