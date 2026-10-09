// Typst 0.15.1 test suite: tests/suite/foundations/label.typ, case label-text-styled-and-sequence, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test label on text, styled, and sequence.
#test([Hello<hi>].label, <hi>)
#test([#[A *B* C]<hi>].label, <hi>)
#test([#text(red)[Hello]<hi>].label, <hi>)
