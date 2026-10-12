// Typst 0.15.1 test suite: tests/suite/math/cancel.typ, case math-cancel-display.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Display
#set page(width: auto)
$ a + b + cancel(b + c) - cancel(b) - cancel(c) - 5 + cancel(6) - cancel(6) $
$ e + (a dot.c cancel((b + c + d)))/(cancel(b + c + d)) $
