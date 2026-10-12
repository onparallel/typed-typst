// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-baseline-transform.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set rotate(reflow: true)
#set scale(reflow: true)
#set skew(reflow: true)

- Abc
- #rotate(90deg)[Abc]
- #rotate(180deg)[Abc]
- #scale(30%)[Abc]
- #skew(ax: 30deg)[Abc]
- #skew(ay: 30deg)[Abc]
