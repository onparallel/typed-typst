// Typst 0.15.1 test suite: tests/suite/pdftags/grid.typ, case grid-tags-internal-grid-layout-breaking-bibliography, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 140pt)

#cite(label("DBLP:books/lib/Knuth86a"))

#bibliography(
  "/assets/bib/works.bib",
  style: "ieee",
)
