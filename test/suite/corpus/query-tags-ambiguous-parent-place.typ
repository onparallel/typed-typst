// Typst 0.15.1 test suite: tests/suite/pdftags/query.typ, case query-tags-ambiguous-parent-place, attributes: pdftags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#place(float: true, top + left)[something] <placed>

#context query(<placed>).join()
