// Typst 0.15.1 test suite: tests/suite/visualize/square.typ, case square-relatively-sized-child.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test relative-sized child.
#square(fill: eastern)[
  #rect(width: 10pt, height: 5pt, fill: conifer)
  #rect(width: 40%, height: 5pt, stroke: conifer)
]
