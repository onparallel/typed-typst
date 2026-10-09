// Typst 0.15.1 test suite: tests/suite/foundations/decimal.typ, case decimal-display-round.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Display less digits.
#calc.round(decimal("-3.9191919191919191919191919195"), digits: 4) \
#calc.round(decimal("5.0000000000"), digits: 4)
