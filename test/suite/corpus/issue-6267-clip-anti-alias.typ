// Typst 0.15.1 test suite: tests/suite/layout/container.typ, case issue-6267-clip-anti-alias.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#block(
  clip: true,
  radius: 100%,
  rect(fill: gray, height: 1cm, width: 1cm),
)
