// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-empty-metadata, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Check that metadata still works in a zero length paragraph.
#block(height: 0pt)[#""#metadata(false)<hi>]
#context test(query(<hi>).first().value, false)
