// Typst 0.15.1 test suite: tests/suite/model/heading.typ, case issue-7428-heading-numbering-errors.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that the error from the first layout iteration is silenced.
#set heading(numbering: (n, ..nums) => {
  assert(n > 0)
  [#n]
})

= A
