// Typst 0.15.1 test suite: tests/suite/styling/show-where.typ, case show-where-resolving-length.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that resolving is *not* taken into account.
#set line(start: (1em, 1em + 2pt))

#{
  show line.where(start: (1em, 1em + 2pt)): "Triggered"
  line()
}
#{
  show line.where(start: (10pt, 12pt)): "Not Triggered"
  line()
}
