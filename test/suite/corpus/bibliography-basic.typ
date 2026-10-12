// Typst 0.15.1 test suite: tests/suite/model/bibliography.typ, case bibliography-basic, attributes: paged html pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show: it => context { set page(width: 200pt) if target() == "paged"; it }

= Details
See also @arrgh #cite(<distress>, supplement: [p.~22]), @arrgh[p.~4], and @distress[p.~5].
#bibliography("/assets/bib/works.bib")
