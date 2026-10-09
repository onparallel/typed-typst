// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-function-scope-renamed, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Renamed module import with function scopes.
#import enum as othernum
#test(enum, othernum)
