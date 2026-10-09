// Typst 0.15.1 test suite: tests/suite/foundations/context.typ, case context-delayed-warning, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that the warning that triggers in the first layout iteration is not
// surfaced since it goes away in the second one. Just like errors in show
// rules.
#show heading: none

= A <a>
#context {
  let n = query(<a>).len()
  let fonts = ("nope", "Roboto")
  set text(font: fonts.at(n))
}
