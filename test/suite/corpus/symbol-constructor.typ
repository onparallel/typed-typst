// Typst 0.15.1 test suite: tests/suite/symbols/symbol.typ, case symbol-constructor.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let envelope = symbol(
  "🖂",
  ("stamped", "🖃"),
  ("stamped.pen", "🖆"),
  ("lightning", "🖄"),
  ("fly", "🖅"),
)
#let one = symbol(
  "1",
  ("emoji", "1️")
)

#envelope
#envelope.stamped
#envelope.pen
#envelope.stamped.pen
#envelope.lightning
#envelope.fly
#one
#one.emoji
