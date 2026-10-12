// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-field-materialized-query.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test it with query.
#set raw(lang: "rust")
#context query(<myraw>).first().lang
`raw` <myraw>
