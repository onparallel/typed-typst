// Typst 0.15.1 test suite: tests/suite/pdf/attach.typ, case pdf-attach, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#pdf.attach("/assets/text/hello.txt")
#pdf.attach(
  "/assets/data/details.toml",
  relationship: "supplement",
  mime-type: "application/toml",
  description: "Information about a secret project",
)
