// Typst 0.15.1 test suite: tests/suite/model/document.typ, case issue-4769-document-context-conditional, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that document set rule can be conditional on document information
// itself.
#set document(author: "Normal", title: [Alternative])
#context {
  set document(author: "Changed") if "Normal" in document.author
}
