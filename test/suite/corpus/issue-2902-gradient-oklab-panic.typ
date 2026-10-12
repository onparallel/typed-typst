// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case issue-2902-gradient-oklab-panic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 15cm, height: auto, margin: 1em)
#set block(width: 100%, height: 1cm, above: 2pt)

// Oklab
#block(fill: gradient.linear(red, purple, space: oklab))
#block(fill: gradient.linear(..color.map.rainbow, space: oklab))
#block(fill: gradient.linear(..color.map.plasma, space: oklab))
