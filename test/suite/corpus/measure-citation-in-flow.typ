// Typst 0.15.1 test suite: tests/suite/layout/measure.typ, case measure-citation-in-flow.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Try measuring a citation that appears inline with other stuff. The
// introspection-assisted location assignment will ensure that the citation
// in the measurement is matched up with the real one.
#context {
  let it = [@netwok]
  let size = measure(it)
  place(line(length: size.width))
  v(1mm)
  it + [ is cited]
}

#show bibliography: none
#bibliography("/assets/bib/works.bib")
