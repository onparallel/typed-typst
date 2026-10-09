// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case transform-rotate-origin.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test setting rotation origin.
#rotate(10deg, origin: top + left,
  image("/assets/images/tiger.jpg", width: 50%)
)
