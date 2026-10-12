// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-function-scope.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test importing from function scopes.

#import enum: item
#import assert.with(true): *

#enum(
   item(1)[First],
   item(5)[Fifth]
)
#eq(10, 10)
#ne(5, 6)
