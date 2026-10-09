// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case issue-2902-gradient-oklch-panic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Minimal reproduction of #2902
#set page(width: 15cm, height: auto, margin: 1em)
#set block(width: 100%, height: 1cm, above: 2pt)

// Oklch
#block(fill: gradient.linear(red, purple, space: oklch))
#block(fill: gradient.linear(..color.map.rainbow, space: oklch))
#block(fill: gradient.linear(..color.map.plasma, space: oklch))
