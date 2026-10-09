// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-radial-relative-self.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The image should look as if there are multiple gradients, one for each
// rectangle.
#let grad = gradient.radial(red, blue, green, purple, relative: "self");
#let my-rect = rect(width: 50%, height: 50%, fill: grad)
#set page(
  height: 50pt,
  width: 50pt,
  margin: 2.5pt,
  fill: grad,
  background: place(top + left, my-rect),
)
#place(top + right, my-rect)
#place(bottom + center, rotate(45deg, my-rect))
