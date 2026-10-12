// Typst 0.15.1 test suite: tests/suite/pdftags/query.typ, case query-tags-duplicate-labelled-element, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#figure(alt: "Text saying: hello there")[
  hello there
] <figure>

#context query(<figure>).at(0)
