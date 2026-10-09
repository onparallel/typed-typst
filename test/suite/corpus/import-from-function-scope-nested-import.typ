// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-function-scope-nested-import, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test importing items from function scopes via nested import.
#import std: grid.cell, table.cell as tcell
#test(cell, grid.cell)
#test(tcell, table.cell)
