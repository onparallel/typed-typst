// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-ref-call.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Footnote call with label
#footnote(<fn>)
#footnote[Hi]<fn>
#ref(<fn>)
#footnote(<fn>)
