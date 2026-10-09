// Typst 0.15.1 test suite: tests/suite/text/shift.typ, case super-highlight.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set super(typographic: false)
#highlight[A#super[4]] B \
A#super[#highlight[4]] B \
A#super(highlight[4]) \
#set super(typographic: true)
#highlight[A#super[4]] B \
A#super[#highlight[4]] B \
A#super(highlight[4])
