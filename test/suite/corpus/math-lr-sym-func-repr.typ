// Typst 0.15.1 test suite: tests/suite/math/delimited.typ, case math-lr-sym-func-repr, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The outline thing is just a roundabout way to force a cast from symbol to
// function...
#test(repr(outline(indent: sym.chevron.l.curly).indent), "(..) => ..")
