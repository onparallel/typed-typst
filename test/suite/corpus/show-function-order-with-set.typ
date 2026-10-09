// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-function-order-with-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// These are both red because in the expanded form, `set text(red)` ends up
// closer to the content than `set text(blue)`.
#show strong: it => { set text(red); it }
Hello *World*

#show strong: it => { set text(blue); it }
Hello *World*
