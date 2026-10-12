// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-same-element-synthesized-matched-field.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Same thing, but even more cursed, because `kind` is synthesized.
#show figure.where(kind: table): set figure(kind: raw)
#figure(table[A], caption: [Code])
