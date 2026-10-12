// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-text.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test a tiling on some text. You shouldn't be able to see the text, if you can
// then that means that the transform matrices are not being applied to the text
// correctly.
#let t = tiling(
  size: (30pt, 30pt),
  relative: "parent",
  square(size: 30pt, fill: gradient.conic(..color.map.rainbow))
);

#set page(
  width: 140pt,
  height: 140pt,
  fill: t
)

#rotate(45deg, scale(x: 50%, y: 70%, rect(
  width: 100%,
  height: 100%,
  stroke: 1pt,
)[
  #lorem(10)

  #set text(fill: t)
  #lorem(10)
]))
