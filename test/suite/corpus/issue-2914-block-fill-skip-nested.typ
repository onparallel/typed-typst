// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-2914-block-fill-skip-nested.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that fill and stroke are skipped for an empty frame with a nested block.
#set page(height: 50pt)
A
#block(fill: aqua, stroke: blue, inset: 5pt, width: 100%, block[B])
