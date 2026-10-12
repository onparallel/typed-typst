// Typst 0.15.1 test suite: tests/suite/math/call.typ, case math-call-non-func, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Using call syntax with a non-function in math renders the callee next to
// parens by "unparsing" the arguments into content.
$ phi(x) $
$ phi(x, y, 1/2) $
