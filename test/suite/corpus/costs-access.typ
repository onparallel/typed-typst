// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case costs-access, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(costs: (hyphenation: 1%, runt: 2%))
#set text(costs: (widow: 3%))
#context test(text.costs, (hyphenation: 1%, runt: 2%, widow: 3%, orphan: 100%))
