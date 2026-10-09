// Typst 0.15.1 test suite: tests/suite/pdf/attach.typ, case pdf-attach-bytes, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#pdf.attach("hello.txt", read("/assets/text/hello.txt", encoding: none))
#pdf.attach(
  "a_file_name.txt",
  read("/assets/text/hello.txt", encoding: none),
  relationship: "supplement",
  mime-type: "text/plain",
  description: "A description",
)
