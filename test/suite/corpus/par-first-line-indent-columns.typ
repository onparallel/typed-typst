// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-first-line-indent-columns.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set par(first-line-indent: (amount: 1em, all: false))

A \ B

C \ D

#colbreak()

// No first line indent after column break
E \ F

G \ H
