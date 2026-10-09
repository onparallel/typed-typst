// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-get-text-on-it.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test accessing the string itself.
#show "hello": it => it.text.split("").map(upper).join("|")
Oh, hello there!
