// Typst 0.15.1 test suite: tests/suite/model/quote.typ, case quote-inline.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Inline citation
#set text(8pt)
#quote(attribution: <tolkien54>)[In a hole in the ground there lived a hobbit.]

#show bibliography: none
#bibliography("/assets/bib/works.bib")
