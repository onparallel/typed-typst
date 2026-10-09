// Typst 0.15.1 test suite: tests/suite/pdftags/disable.typ, case disable-tags-artifact, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
= Heading 1
#pdf.artifact[
  #table(
    columns: 2,
    [a], [b],
    [c], [d],
  )
]

= Heading 2
