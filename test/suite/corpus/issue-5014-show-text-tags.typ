// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case issue-5014-show-text-tags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#{
  let c = counter("c")
  show "b": context c.get().first()
  [a]
  c.step()
  [bc]
}
