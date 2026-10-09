// Typst 0.15.1 test suite: tests/suite/styling/show.typ, case show-selector-element-or-label.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test element selector combined with label selector.
#show selector(strong).or(<special>): highlight
I am *strong*, I am _emphasized_, and I am #[special<special>].
