// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-nested-base-bad-placement, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This used to have bad placement with nested attachments.
$
  // `b:2` in the middle attach used to stop `b:4` from moving inward.
  attach(attach(attach(a, t: 1), b: 2), t: 3, b: 4)
  quad
  attach(attach(b, t: 1, b: 2), t: 3, b: 4)
$
