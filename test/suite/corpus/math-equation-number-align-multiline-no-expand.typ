// Typst 0.15.1 test suite: tests/suite/math/equation.typ, case math-equation-number-align-multiline-no-expand.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Tests that if the numbering's layout box doesn't vertically exceed the
// box of the equation frame's boundary, the latter's frame size remains.
// So, in the grid below, frames in each row should have the same height.
#set math.equation(numbering: "1")
#grid(
  columns: 4 * (1fr,),
  column-gutter: 3 * (2pt,),
  row-gutter: 2pt,
  align: horizon,
  [
    #set math.equation(number-align: horizon)
    #box($ - - \ a \ sum $, fill: silver)
  ],
  [
    #set math.equation(number-align: bottom)
    #box($ - - \ a \ sum $, fill: silver)
  ],
  [
    #set math.equation(number-align: horizon)
    #box($ sum \ a \ - - $, fill: silver)
  ],
  [
    #set math.equation(number-align: top)
    #box($ sum \ a \ - - $, fill: silver)
  ],

  [
    #set math.equation(number-align: horizon)
    #box($ - - $, fill: silver)
  ],
  [
    #set math.equation(number-align: top)
    #box($ - - $, fill: silver)
  ],
  [
    #set math.equation(number-align: bottom)
    #box($ - - $, fill: silver)
  ],
)
