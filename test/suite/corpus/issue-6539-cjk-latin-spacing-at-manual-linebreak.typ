// Typst 0.15.1 test suite: tests/suite/layout/inline/cjk.typ, case issue-6539-cjk-latin-spacing-at-manual-linebreak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Issue #6539
#set text(cjk-latin-spacing: auto)
#set box(width: 2.3em, stroke: (x: green))

#box(align(end)[甲国\ T国])

#box(align(end)[乙国 \ T国])

#box(align(end)[丙国 T国])

#box(align(end)[丁国T国])
