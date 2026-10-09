// Typst 0.15.1 test suite: tests/suite/visualize/stroke.typ, case stroke-fields-simple, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test stroke fields for simple strokes.
#test((1em + blue).paint, blue)
#test((1em + blue).thickness, 1em)
#test((1em + blue).cap, auto)
#test((1em + blue).join, auto)
#test((1em + blue).dash, auto)
#test((1em + blue).miter-limit, auto)
