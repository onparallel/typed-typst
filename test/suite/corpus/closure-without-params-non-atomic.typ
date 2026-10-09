// Typst 0.15.1 test suite: tests/suite/scripting/closure.typ, case closure-without-params-non-atomic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Don't parse closure directly in content.

#let x = "x"

// Should output `x => y`.
#x => y
