// Typst 0.15.1 test suite: tests/suite/math/interactions.typ, case math-nested-normal-layout.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test images and font fallback.
#let monkey = move(dy: 0.2em, image("/assets/images/monkey.svg", height: 1em))
$ sum_(i=#emoji.apple)^#emoji.apple.red i + monkey/2 $
