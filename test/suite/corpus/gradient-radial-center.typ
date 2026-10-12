// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-radial-center.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(
  columns: 2,
  square(
    size: 50pt,
    fill: gradient.radial(..color.map.rainbow, space: color.hsl, center: (0%, 0%)),
  ),
  square(
    size: 50pt,
    fill: gradient.radial(..color.map.rainbow, space: color.hsl, center: (0%, 100%)),
  ),
  square(
    size: 50pt,
    fill: gradient.radial(..color.map.rainbow, space: color.hsl, center: (100%, 0%)),
  ),
  square(
    size: 50pt,
    fill: gradient.radial(..color.map.rainbow, space: color.hsl, center: (100%, 100%)),
  ),
)
