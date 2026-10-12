// Typst 0.15.1 test suite: tests/suite/scripting/methods.typ, case math-field-call-accent-non-func, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test calling a symbol whose field isn't an accent.
#test($pi.alt(x)$, $pi.alt/**/(x)$)
