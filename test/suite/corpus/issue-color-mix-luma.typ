// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case issue-color-mix-luma.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// When mixing luma colors, we accidentally used the wrong component.
#rect(fill: gradient.linear(black, silver, space: luma))
