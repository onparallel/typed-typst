// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case issue-3671-get-from-page-call, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(margin: 5pt)
#context test(page.margin, 5pt)
#page(margin: 10pt, context test(page.margin, 10pt))
