// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-style-boundary.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show "What's up": set text(blue)
#show "your party": underline
What's #[ ] up at #"your" #text(red)[party?]
