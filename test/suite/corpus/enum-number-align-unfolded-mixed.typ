// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-number-align-unfolded-mixed.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Verify whether overriding vertical alignment causes horizontal alignment to
// be inherited from the context.
#set align(center)
#set enum(
  number-align: top,
  numbering: n => "1" * n,
)

+ abc
+ abc
+ abc
