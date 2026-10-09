// Typst 0.15.1 test suite: tests/suite/layout/dir.typ, case dir-from, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test(direction.from(left), ltr)
#test(direction.from(right), rtl)
#test(direction.from(top), ttb)
#test(direction.from(bottom), btt)
