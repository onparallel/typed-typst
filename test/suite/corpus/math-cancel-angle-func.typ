// Typst 0.15.1 test suite: tests/suite/math/cancel.typ, case math-cancel-angle-func.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Specifying cancel line angle with a function
$x + cancel(y, angle: #{angle => angle + 90deg}) - cancel(z, angle: #(angle => angle + 135deg))$
$ e + cancel((j + e)/(f + e)) - cancel((j + e)/(f + e), angle: #(angle => angle + 30deg)) $
