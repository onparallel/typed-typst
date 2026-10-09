// Typst 0.15.1 test suite: tests/suite/math/size.typ, case math-size, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test forcing math size
$a/b, display(a/b), display(a)/display(b), inline(a/b), script(a/b), sscript(a/b) \
 mono(script(a/b)), script(mono(a/b))\
 script(a^b, cramped: #true), script(a^b, cramped: #false)$
