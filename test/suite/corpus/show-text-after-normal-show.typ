// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-after-normal-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show rect: "world"
#show "lo wo": set text(red)
hello #rect()
