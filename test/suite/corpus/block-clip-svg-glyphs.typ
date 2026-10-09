// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case block-clip-svg-glyphs.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test clipping svg glyphs
Emoji: #box(height: 0.5em, stroke: 1pt + black)[🐪, 🌋, 🏞]

Emoji: #box(height: 0.5em, clip: true, stroke: 1pt + black)[🐪, 🌋, 🏞]
