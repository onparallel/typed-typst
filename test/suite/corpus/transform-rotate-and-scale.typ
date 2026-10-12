// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-rotate-and-scale.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test combination of scaling and rotation.
#set page(height: 80pt)
#align(center + horizon,
  rotate(20deg, scale(70%, image("/assets/images/tiger.jpg")))
)
