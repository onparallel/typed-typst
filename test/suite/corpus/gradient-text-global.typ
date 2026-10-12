// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-text-global.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that gradient fills on text work for globally defined gradients.
#set page(width: 200pt, height: auto, margin: 10pt, background: {
  rect(width: 100%, height: 30pt, fill: gradient.linear(red, blue))
})
#set par(justify: true)
#set text(fill: gradient.linear(red, blue))
#lorem(30)
