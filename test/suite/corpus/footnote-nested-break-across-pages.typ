// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-nested-break-across-pages.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 80pt)
A #footnote([I: ] + lines(6) + footnote[II])
B #footnote[III]
