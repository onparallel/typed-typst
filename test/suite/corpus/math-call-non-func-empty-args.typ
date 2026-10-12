// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-non-func-empty-args, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Trailing commas and empty args introduce blank content in math
$ sin(,x,y,,,) $
// with whitespace/trivia:
$ sin( ,/**/x/**/, , /**/y, ,/**/, ) $
