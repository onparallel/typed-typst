// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case issue-5503-enum-in-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// `align` is block-level and should interrupt an enum.
+ a
+ b
#align(right)[+ c]
+ d
