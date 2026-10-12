// Typst 0.15.1 test suite: tests/suite/model/document.typ, case issue-4065-document-context, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that we can set document properties based on context.
#show: body => context {
  let all = query(heading)
  let title = if all.len() > 0 { all.first().body }
  set document(title: title)
  body
}

#show heading: none
= Top level
