// Typst 0.15.1 test suite: tests/suite/foundations/eval.typ, case eval-mode.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test evaluation in other modes.
#eval("[_Hello" + " World!_]") \
#eval("_Hello" + " World!_", mode: "markup") \
#eval("RR_1^NN", mode: "math", scope: (RR: math.NN, NN: math.RR))
