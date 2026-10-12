// Typst 0.15.1 test suite: tests/suite/layout/stack.typ, case stack-rtl-align-and-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test aligning things in RTL stack with align function & fr units.
#set page(width: 50pt, margin: 5pt)
#set block(spacing: 5pt)
#set text(8pt)
#stack(dir: rtl, 1fr, [A], 1fr, [B], [C])
#stack(dir: rtl,
  align(center, [A]),
  align(left, [B]),
  [C],
)
