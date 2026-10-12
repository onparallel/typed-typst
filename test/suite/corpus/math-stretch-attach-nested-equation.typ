// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-attach-nested-equation, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stretching with attachments when nested in an equation.
#let body = $stretch(=)$
$ body^"text" $

#{
  let body = $stretch(=)$
  for i in range(24) {
    body = $body$
  }
  $body^"long text"$
}
