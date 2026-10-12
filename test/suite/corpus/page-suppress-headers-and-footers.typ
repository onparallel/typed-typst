// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-suppress-headers-and-footers.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(header: none, footer: none, numbering: "1")
Look, ma, no page numbers!

#pagebreak()

#set page(header: auto, footer: auto)
Default page numbers now.
