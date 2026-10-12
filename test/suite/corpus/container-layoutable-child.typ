// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case container-layoutable-child.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test box/block sizing with directly layoutable child.
//
// Ensure that the output respects the box size.
#let check(f) = f(
  width: 40pt, height: 25pt, fill: aqua,
  grid(rect(width: 5pt, height: 5pt, fill: blue)),
)

#stack(dir: ltr, spacing: 1fr, check(box), check(block))
