// Typst 0.15.1 test suite: tests/suite/model/enum.typ, case enum-number-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test item number overriding.
1. first
+ second
5. fifth

#enum(
   enum.item(1)[First],
   [Second],
   enum.item(5)[Fifth]
)
