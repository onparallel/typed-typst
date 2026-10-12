// Typst 0.15.1 test suite: tests/suite/foundations/label.typ, case label-dynamic-show-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test abusing dynamic labels for styling.
#show <red>: set text(red)
#show <blue>: set text(blue)

*A* *B* <red> *C* #label("bl" + "ue") *D*
