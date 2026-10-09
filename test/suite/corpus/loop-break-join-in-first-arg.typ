// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-join-in-first-arg.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test second block during break flow.

#for i in range(10) {
  table(
    { [A]; break },
    for _ in range(3) [B]
  )
}
