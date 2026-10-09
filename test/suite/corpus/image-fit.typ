// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-fit.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test all three fit modes.
#set page(height: 50pt, margin: 0pt)
#grid(
  columns: (1fr, 1fr, 1fr),
  rows: 100%,
  gutter: 3pt,
  image("/assets/images/tiger.jpg", width: 100%, height: 100%, fit: "contain"),
  image("/assets/images/tiger.jpg", width: 100%, height: 100%, fit: "cover"),
  image("/assets/images/monkey.svg", width: 100%, height: 100%, fit: "stretch"),
)
