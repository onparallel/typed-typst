// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-numbering-closure-nested.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test numbering with closure and nested lists.
#set enum(numbering: n => super[#n])
+ A
  + B
+ C
