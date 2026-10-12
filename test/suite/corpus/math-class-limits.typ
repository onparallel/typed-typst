// Typst 0.15.1 test suite: tests/suite/math/class.typ, case math-class-limits, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test if the math class changes the limit configuration.
$ class("normal", ->)_a $
$class("relation", x)_a$
$ class("large", x)_a $
$class("large", ->)_a$

$limits(class("normal", ->))_a$
$ scripts(class("relation", x))_a $
