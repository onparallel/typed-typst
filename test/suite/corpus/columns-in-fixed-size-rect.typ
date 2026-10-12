// Typst 0.15.1 test suite: tests/suite/layout/columns.typ, case columns-in-fixed-size-rect.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the `columns` function.
#set page(width: auto)

#rect(width: 180pt, height: 100pt, inset: 8pt, columns(2, [
    A special plight has befallen our document.
    Columns in text boxes reigned down unto the soil
    to waste a year's crop of rich layouts.
    The columns at least were graciously balanced.
]))
