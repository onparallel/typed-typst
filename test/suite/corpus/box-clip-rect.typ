// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case box-clip-rect.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test box clipping with a rectangle
Hello #box(width: 1em, height: 1em, clip: false)[#rect(width: 3em, height: 3em, fill: red)]
world 1

Space

Hello #box(width: 1em, height: 1em, clip: true)[#rect(width: 3em, height: 3em, fill: red)]
world 2
