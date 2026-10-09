// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-non-func-spacing, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that we keep the same spacing when unparsing.
#show regex("[,;]"): math.class.with("fence")
$ phi(| , | ; |) \
  phi/**/(| , | ; |) $
#test($     phi(| , | ; |) $,
      $ phi/**/(| , | ; |) $)
