// Typst 0.15.1 test suite: tests/suite/visualize/rect.typ, case rect-adjacent-dashed-stroke-cap-change.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto)
#rect(
  height: 1.2cm,
  width: 1.5cm,
  stroke: (
    bottom: (cap: "square", thickness: 4pt, dash: "loosely-dashed"),
    left: (cap: "round", thickness: 4pt, dash: "loosely-dashed"),
  ),
)
