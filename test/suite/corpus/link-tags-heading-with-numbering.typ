// Typst 0.15.1 test suite: tests/suite/pdftags/link.typ, case link-tags-heading-with-numbering, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set heading(numbering: "1.")
= Heading <heading>

#link(<heading>)[link to heading]
