// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-nested, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
First \
Second #footnote[A, #footnote[B, #footnote[C]]]
Third #footnote[D, #footnote[E]] \
Fourth #footnote[F]
