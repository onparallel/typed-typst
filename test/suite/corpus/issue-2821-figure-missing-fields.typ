// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case issue-2821-figure-missing-fields, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Issue #2821: Setting a figure's supplement to none removes the field
#show figure.caption: it => {
  assert(it.has("supplement"))
  assert(it.supplement == none)
}
#figure([], caption: [], supplement: none)
