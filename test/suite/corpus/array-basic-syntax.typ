// Typst 0.15.1 test suite: tests/suite/foundations/array.typ, case array-basic-syntax.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 150pt)

// Empty.
#()

// Not an array, just a parenthesized expression.
#(1)

// One item and trailing comma.
#(-1,)

// No trailing comma.
#(true, false)

// Multiple lines and items and trailing comma.
#("1"
    , rgb("002")
    ,)
