// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-source-field-access.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Usual importing syntax also works for function scopes
#let d = (e: enum)
#import d.e
#import d.e as renamed
#import d.e: item
#item(2)[a]
