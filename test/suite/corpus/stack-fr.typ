// Typst 0.15.1 test suite: tests/suite/layout/stack.typ, case stack-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 3.5cm)
#stack(
  dir: ltr,
  spacing: 1fr,
  ..for c in "ABCDEFGHI" {([#c],)}
)

Hello
#v(2fr)
from #h(1fr) the #h(1fr) wonderful
#v(1fr)
World! 🌍
