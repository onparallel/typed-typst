// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-numbering, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context {
  set page(width: 150pt) if target() == "paged"
  it
}
#set math.equation(numbering: "(I)")

We define $x$ in preparation of @fib:
$ phi.alt := (1 + sqrt(5)) / 2 $ <ratio>

With @ratio, we get
$ F_n = round(1 / sqrt(5) phi.alt^n) $ <fib>
