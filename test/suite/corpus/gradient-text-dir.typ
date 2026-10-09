// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-text-dir.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Sanity check that the direction works on text.
#set page(width: 200pt, height: auto, margin: 10pt, background: {
  rect(height: 100%, width: 30pt, fill: gradient.linear(dir: btt, red, blue))
})
#set par(justify: true)
#set text(fill: gradient.linear(dir: btt, red, blue))
#lorem(30)
