// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-where-text-is-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Spaces in `text` match even if differently styled, unlike the previous test.
#show text.where(text: " "): [B]
A#text(" ")C \
A#text([ ])C \ // Space elements don't magically become `text`
A#text(" ", red)C
