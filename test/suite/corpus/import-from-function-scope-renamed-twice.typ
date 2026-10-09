// Typst 0.15.1 test suite: tests/suite/scripting/import.typ, case import-from-function-scope-renamed-twice, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Mixing renamed module import from function with renamed item import.
#import assert as asrt
#import asrt: ne as asne
#asne(1, 2)
