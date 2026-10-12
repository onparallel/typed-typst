// Typst 0.15.1 test suite: tests/suite/math/multiline.typ, case math-linebreaking-between-consecutive-relations.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// A relation followed by a relation doesn't linebreak
// so essentially `a < = b` can be broken to `a` and `< = b`, `a < =` and `b`
// but never `a <` and `= b` because `< =` are consecutive relation that should
// be grouped together and no break between them.
#let hrule(x) = box(line(length: x))
#hrule(70pt)$a < = b$\
#hrule(78pt)$a < = b$
