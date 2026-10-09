// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-instantiation-site-markup.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that lists are affected by correct indents.
#let fruit = [
  - Apple
  - Orange
  #list(body-indent: 20pt)[Pear]
]

- Fruit
#[#set list(indent: 10pt)
 #fruit]
- No more fruit
