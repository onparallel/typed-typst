// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-5775-cite-order-rtl.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test citation order in RTL text.
#set page(width: 300pt)
#set text(font: ("Libertinus Serif", "Noto Sans Arabic"))
@netwok
aaa
این است
@tolkien54
و این یکی هست
@arrgh

#bibliography("/assets/bib/works.bib")
