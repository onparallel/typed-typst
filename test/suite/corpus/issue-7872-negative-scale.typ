// Typst 0.15.1 test suite: tests/suite/layout/transform.typ, case issue-7872-negative-scale.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#scale(x: -100%, y: -101%)[hey]
#scale(x: -100%, y: -100%)[hey]
#set text(size: -1em)
#scale(x: -100%, y: -100%)[hey]
