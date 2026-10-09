// Typst 0.15.1 test suite: tests/suite/layout/pagebreak.typ, case pagebreak-to.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 80pt, height: 30pt)
First
#pagebreak(to: "odd")
Third
#pagebreak(to: "even")
Fourth
#pagebreak(to: "even")
Sixth
#pagebreak()
Seventh
#pagebreak(to: "odd")
#page[Ninth]
