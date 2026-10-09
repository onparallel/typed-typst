// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case cite-form, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context { set page(width: 200pt) if target() == "paged"; it }

Nothing: #cite(<arrgh>, form: none)

#cite(<netwok>, form: "prose") say stuff.

#bibliography("/assets/bib/works.bib", style: "apa")
