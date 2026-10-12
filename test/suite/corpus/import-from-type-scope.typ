// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-type-scope, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test importing from a type's scope.
#import array: zip
#test(zip((1, 2), (3, 4)), ((1, 3), (2, 4)))
