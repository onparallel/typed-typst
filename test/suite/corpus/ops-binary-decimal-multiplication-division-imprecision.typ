// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-binary-decimal-multiplication-division-imprecision, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test digit truncation by multiplication and division.
#test(decimal("0.7777777777777777777777777777") / 1000, decimal("0.0007777777777777777777777778"))
#test(decimal("0.7777777777777777777777777777") * decimal("0.001"), decimal("0.0007777777777777777777777778"))
