// Typst 0.15.1 test suite: tests/suite/math/text.typ, case issue-6090-math-overhang, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
$ f(t) = cases(
    1 quad & "if" 0 < t < 1\,,
    0 quad & "otherwise"
) $
$ f(t) = cases(
    1 quad & "if" 0 < t < 1\,,
    0 quad & "otherwise.",
) $
$ f(t) = cases(
    1 quad & "if" 0 < t < 1\,,
    0 quad & "otherwise,",
) $
$ f(t) = cases(
    1 quad & "if" 0 < t < 1\,,
    0 quad & "otherwise!",
) $
