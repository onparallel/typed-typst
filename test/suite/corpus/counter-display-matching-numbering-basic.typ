// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-display-matching-numbering-basic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that `counter(heading).display()` just works: It takes care of
// using the correct location and numbering.
#show heading: it => block(counter(heading).display() + [ ] + it.body)
#heading(numbering: "1.")[One]
#heading(numbering: "A.")[Two]
