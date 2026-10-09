// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case box.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test box in paragraph.
A #box[B \ C] D.

// Test box with height.
Spaced \
#box(height: 0.5cm) \
Apart
