// Typst 0.15.1 test suite: tests/suite/layout/columns.typ, case columns-in-auto-sized-rect.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test the expansion behaviour.
#set page(height: 2.5cm, width: 7.05cm)

#rect(inset: 6pt, columns(2, [
    ABC \
    BCD
    #colbreak()
    DEF
]))
