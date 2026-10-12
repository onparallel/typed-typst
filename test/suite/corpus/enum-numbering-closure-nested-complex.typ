// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-numbering-closure-nested-complex.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test numbering with closure and nested lists.
#set text(font: "New Computer Modern")
#set enum(numbering: (..args) => math.mat(args.pos()), full: true)
+ A
  + B
  + C
    + D
+ E
+ F
