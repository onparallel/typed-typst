// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-type-scope-nested-import, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test importing from a type's scope with nested import.
#import std: array.zip, array.pop as renamed-pop
#test(zip((1, 2), (3, 4)), ((1, 3), (2, 4)))
#test(renamed-pop((1, 2)), 2)
