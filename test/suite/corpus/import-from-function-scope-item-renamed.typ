// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-function-scope-item-renamed, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test renaming items imported from function scopes.
#import assert: eq as aseq
#aseq(10, 10)
