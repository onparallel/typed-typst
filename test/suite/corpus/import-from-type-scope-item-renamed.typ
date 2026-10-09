// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-type-scope-item-renamed, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test importing from a type's scope with renaming.
#import array: pop as renamed-pop
#test(renamed-pop((1, 2)), 2)
