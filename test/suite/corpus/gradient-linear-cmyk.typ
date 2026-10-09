// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-linear-cmyk.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that CMYK works on gradients
#set page(margin: 0pt, width: 100pt, height: auto)

#let violet = cmyk(75%, 80%, 0%, 0%)
#let blue = cmyk(75%, 30%, 0%, 0%)

#rect(
  width: 100%,
  height: 10pt,
  fill: gradient.linear(violet, blue)
)

#rect(
  width: 100%,
  height: 10pt,
  fill: gradient.linear(rgb(violet), rgb(blue))
)

// In PDF format, this gradient can look different from the others.
// This is because PDF readers do weird things with CMYK.
#rect(
  width: 100%,
  height: 10pt,
  fill: gradient.linear(violet, blue, space: cmyk)
)
