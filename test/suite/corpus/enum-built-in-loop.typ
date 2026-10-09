// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-built-in-loop.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test automatic numbering in summed content.
#for i in range(5) {
   [+ #numbering("I", 1 + i)]
}
