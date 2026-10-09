// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-text-fill.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let t = tiling(
  size: (30pt, 30pt),
  relative: "parent",
  square(size: 30pt, fill: gradient.conic(..color.map.rainbow))
);
#set text(fill: t)

#lorem(20)
