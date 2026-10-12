// Typst 0.15.1 test suite: tests/suite/visualize/tiling.typ, case tiling-line.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tests that simple tilings work.
#set page(width: auto, height: auto, margin: 0pt)
#let t = tiling(size: (10pt, 10pt), line(stroke: 4pt, start: (0%, 0%), end: (100%, 100%)))
#rect(width: 50pt, height: 50pt, fill: t)
