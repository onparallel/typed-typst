// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-set-override.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test overriding show-set rules.
#show strong: set text(red)
Hello *World*

#show strong: set text(blue)
Hello *World*
