// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-outer-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Spaces must be interior to strong textual elements for matching to work.
// For outer spaces, it is hard to say whether they would collapse.
#show "a\n": set text(blue)
#show "b\n ": set text(blue)
#show " c ": set text(blue)
a \ #h(0pt, weak: true)
b \ #h(0pt, weak: true)
$x$ c $y$
