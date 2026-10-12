// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-clearance-empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Check that we don't require space for clearance if there is no content.
#set page(height: 100pt)
#v(1fr)
#table(
  columns: (1fr, 1fr),
  lines(2),
  [],
  lines(8),
  place(auto, float: true, block(width: 100%, height: 100%, fill: aqua))
)
