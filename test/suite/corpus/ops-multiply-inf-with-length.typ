// Typst 0.15.1 test suite: tests/suite/scripting/ops.typ, case ops-multiply-inf-with-length.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that multiplying infinite numbers by certain units does not crash.
#(float("inf") * 1pt)
#(float("inf") * 1em)
#(float("inf") * (1pt + 1em))
