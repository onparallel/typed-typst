// Typst 0.15.1 test suite: tests/suite/introspection/counter.typ, case counter-display-matching-numbering-wrong.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that we don't pick up a numbering unrelated to the counted element.
#set heading(numbering: "A)")
#set math.equation(numbering: "1.")
= Hello
$ 1 + 2 $ <eq>
#context counter(heading).display(at: <eq>)
