// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case footnote-ref-multiple, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Multiple footnotes are refs
First #footnote[A]<fn1> \
Second #footnote[B]<fn2> \
First ref @fn1 \
Third #footnote[C] \
Fourth #footnote[D]<fn4> \
Fourth ref @fn4 \
Second ref @fn2 \
Second ref again @fn2
