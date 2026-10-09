// Typst 0.15.1 test suite: tests/suite/model/ref.typ, case ref-form-page-unambiguous.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that page reference is not ambiguous.
#set page(numbering: "1")

= Introduction <arrgh>

#ref(<arrgh>, form: "page")
#bibliography("/assets/bib/works.bib")
