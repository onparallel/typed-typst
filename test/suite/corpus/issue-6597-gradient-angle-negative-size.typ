// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case issue-6597-gradient-angle-negative-size.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set rect(fill: gradient.linear(angle: 45deg, ..color.map.viridis))
#grid(columns: (1cm, 1cm), rows: 5mm, gutter: 1mm, align: center + horizon,
  rect(width: +1cm, height: +5mm), rect(width: -1cm, height: +5mm),
  rect(width: +1cm, height: -5mm), rect(width: -1cm, height: -5mm),
)
