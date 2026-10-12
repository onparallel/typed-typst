// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-text-single-grapheme-cluster, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that single graph clusters are considered a single character in math.
$ 𝒟 𝒟︀ 𝒟︁ $
#show math.equation: set text(font: "Noto Sans Math")
$ 𝒟 𝒟︀ 𝒟︁ $
