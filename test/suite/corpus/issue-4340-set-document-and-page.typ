// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case issue-4340-set-document-and-page.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test custom page fields being applied on the last page
// if the document has custom fields.
#set document(author: "")
#set page(fill: gray)
text
#pagebreak()
