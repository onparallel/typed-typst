// Typst 0.15.1 test suite: tests/suite/text/shift.typ, case sub-super.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let sq = box(square(size: 4pt))
#table(
  columns: 3,
  [Typo.], [Fallb.], [Synth.],
  [x#super[1#sq]], [x#super[5: #sq]], [x#super(typographic: false)[2 #sq]],
  [x#sub[1#sq]], [x#sub[5: #sq]], [x#sub(typographic: false)[2 #sq]],
)
