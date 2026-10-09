// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-angle-rotation-aspect.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#grid(columns: (1cm, 1cm), rows: 5mm, gutter: 1mm, align: center + horizon,
  rect(width: 1cm, height: 5mm, fill: gradient.linear(angle: 60deg, ..color.map.spectral)),
  rect(width: 1cm, height: 5mm, fill: gradient.linear(angle: 120deg, ..color.map.spectral)),
  rect(width: 1cm, height: 5mm, fill: gradient.linear(angle: 300deg, ..color.map.spectral)),
  rect(width: 1cm, height: 5mm, fill: gradient.linear(angle: 240deg, ..color.map.spectral)),
)
