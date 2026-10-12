// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-label.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Count labels.
#let label = <heya>
#let count = context counter(label).display()
#let elem(it) = [#box(it) #label]

#elem[hey, there!] #count \
#elem[more here!] #count
