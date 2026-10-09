// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-line-cap.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that line caps are taken into account for gradient fills.
#for cap in ("square", "butt", "round"){
  box(line(length: 10pt, stroke: (
    thickness: 20pt,
    paint: gradient.radial(blue, orange).sharp(4),
    cap: cap
  )), width: 30pt)
}
