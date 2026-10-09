// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-indirectly-cyclic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test indirect cycle.
#show "Good": [Typst!]
#show "Typst": [Fun!]
#show "Fun": [Good!]

#set text(ligatures: false)
Good \
Fun \
Typst \
