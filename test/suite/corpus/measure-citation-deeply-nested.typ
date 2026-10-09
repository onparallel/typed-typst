// Typst 0.15.1 test suite: tests/suite/layout/measure.typ, case measure-citation-deeply-nested.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Nested the citation deeply to test that introspector-assisted measurement
// is able to deal with memoization boundaries.
#context {
  let it = box(pad(x: 5pt, grid(stack[@netwok])))
  [#measure(it).width]
  it
}

#show bibliography: none
#bibliography("/assets/bib/works.bib")
