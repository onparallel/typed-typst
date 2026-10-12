// Typst 0.15.1 test suite: tests/suite/layout/grid/stroke.typ, case grid-stroke-field-in-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stroke field on cell show rules
#set grid.cell(stroke: (x: 4pt))
#set grid.cell(stroke: (x: blue))
#show grid.cell: it => {
  test(it.stroke, (left: stroke(paint: blue, thickness: 4pt, dash: "loosely-dotted"), right: blue + 4pt, top: stroke(thickness: 1pt), bottom: none))
  it
}
#grid(
  stroke: (left: (dash: "loosely-dotted")),
  inset: 5pt,
  grid.hline(stroke: red),
  grid.cell(stroke: (top: 1pt))[a], grid.vline(stroke: yellow),
)
