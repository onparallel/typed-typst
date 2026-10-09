// Typst 0.15.1 test suite: tests/suite/model/emph-strong.typ, case strong-delta.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Adjusting the delta that strong applies on the weight.
Normal

#set strong(delta: 300)
*Bold*

#set strong(delta: 150)
*Medium* and *#[*Bold*]*
