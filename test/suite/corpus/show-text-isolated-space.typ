// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-isolated-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show " ": it => {
  test(it.func(), text)
  test(it.text, " ")
  [-]
}
// We split up the text run into three separate elements to see what kind of
// element we get in the match (space vs text). We want text so that a `.text`
// field is available.
A#[ ]B
