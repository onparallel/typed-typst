// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-nested-deep-base, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test attachments when the base has attachments and is nested arbitrarily
// deep.
#{
  let var = $x^1$
  for i in range(24) {
    var = $var$
  }
  $var_2$
}
