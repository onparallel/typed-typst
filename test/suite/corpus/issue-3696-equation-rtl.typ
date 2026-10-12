// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case issue-3696-equation-rtl, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: 150pt) if target() == "paged"
  it
}
#set text(lang: "he")
תהא סדרה $a_n$: $[a_n: 1, 1/2, 1/3, dots]$
