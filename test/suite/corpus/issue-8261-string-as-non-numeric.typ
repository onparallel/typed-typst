// Typst 0.15.1 test suite: tests/suite/math/text.typ, case issue-8261-string-as-non-numeric, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Testing that various "bogus" strings produce `<mtext>` in MathML, not `<mn>`
$ "1..1" ".1.1" "1.1." "1..1..1" "1.1.1" ".." $
