// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-join-in-set-rule-args.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test break in set rule.
// Should output `Hi` in blue.
#for i in range(10) {
  [Hello]
  set text(blue, ..break)
  [Not happening]
}
