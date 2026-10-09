// Typst 0.15.1 test suite: tests/suite/layout/align.typ, case align-in-stack.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#stack(dir: ltr,
  align(left, square(size: 15pt, fill: eastern)),
  align(center, square(size: 20pt, fill: eastern)),
  align(right, square(size: 15pt, fill: eastern)),
)
#align(center + horizon, rect(fill: eastern, height: 10pt))
#align(bottom, stack(
  align(center, rect(fill: conifer, height: 10pt)),
  rect(fill: forest, height: 10pt, width: 100%),
))
