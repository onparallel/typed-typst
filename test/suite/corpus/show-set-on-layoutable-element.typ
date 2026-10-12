// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-on-layoutable-element.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test show-set rules on layoutable element to ensure it is realized
// even though it implements `LayoutMultiple`.
#show table: set text(red)
#pad(table(columns: 4)[A][B][C][D])
