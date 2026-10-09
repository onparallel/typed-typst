// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-baseline-text-with-math.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto, height: auto)
- Text
  - Text $ "O1" = (7 "O1" + 3 (display((sum_(i = 1)^4 L_i)/4)))/10 $
  - $ "O1" = (7 "O1" + 3 (display((sum_(i = 1)^4 L_i)/4)))/10 $
