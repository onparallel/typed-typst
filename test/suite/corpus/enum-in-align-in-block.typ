// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-in-align-in-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The marker doesn't move as the list body expands and aligns itself.
// However, with `block`, the list body does not expand, so the marker is also
// aligned.
+ a
+ b
#align(right)[+ c]
#align(right, block[+ d])
