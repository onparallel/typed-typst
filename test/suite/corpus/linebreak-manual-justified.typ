// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case linebreak-manual-justified.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test justified breaks.
#set par(justify: true)
With a soft #linebreak(justify: true)
break you can force a break without #linebreak(justify: true)
breaking justification. #linebreak(justify: false)
Nice!
