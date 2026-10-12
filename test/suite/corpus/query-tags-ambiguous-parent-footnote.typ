// Typst 0.15.1 test suite: tests/suite/pdftags/query.typ, case query-tags-ambiguous-parent-footnote, attributes: pdftags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#footnote[something] <note>

#context query(<note>).join()
