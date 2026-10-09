// Typst 0.15.1 test suite: tests/suite/layout/inline/text.typ, case issue-5855-misaligned-descender.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
foo #box[foo] foo

#set text(bottom-edge: "descender")

foo #box[foo] foo
