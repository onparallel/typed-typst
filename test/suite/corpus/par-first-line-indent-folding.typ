// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-first-line-indent-folding, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let check(expected) = context assert.eq(par.first-line-indent, expected)

// To be intuitive, values from context should never contain `none`.
#check((amount: 0pt, all: false))

#set par(first-line-indent: 2em)
#check((amount: 2em, all: false))

#set par(first-line-indent: (all: true))
#check((amount: 2em, all: true))

/// The following two ways should be the same.
#set par(first-line-indent: 7em)
#check((amount: 7em, all: true))
#set par(first-line-indent: (amount: 1em))
#check((amount: 1em, all: true))

#set par(first-line-indent: (all: false))
#check((amount: 1em, all: false))

#set par(first-line-indent: (amount: 8em, all: true))
#check((amount: 8em, all: true))
