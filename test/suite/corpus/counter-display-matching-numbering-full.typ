// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-display-matching-numbering-full.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tests that the determination of the matching numbering is comprehensive for
// all supported elements.

// This should be overridden by the element's numbering.
#set heading(numbering: "(i)")
#set math.equation(block: true)

#let funcs = (heading, figure, math.equation, footnote)
#show selector.or(..funcs): it => counter(it.func()).display()
#for f in funcs {
  block(f(numbering: "a)")[])
}
