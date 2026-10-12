// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-with-different-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let content = place(dx: 5pt, dy: 5pt, circle(radius: 5pt, fill: blue))
#let pat1 = tiling(size: (20pt, 20pt), content)
// Second tiling, only the spacing attribute changes
#let pat2 = tiling(size: (20pt, 20pt), spacing: (20pt, 0pt), content)

#rect(fill: pat1, width: 100pt, height: 20pt, stroke: 1pt)
#rect(fill: pat2, width: 100pt, height: 20pt, stroke: 1pt)
