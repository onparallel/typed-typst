// Typst 0.15.1 test suite: tests/suite/scripting/if.typ, case if-markup.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test condition evaluation.
#if 1 < 2 [
  One.
]

#if true == false [
  {Bad}, but we {dont-care}!
]
