// Typst 0.15.1 test suite: tests/suite/pdftags/table.typ, case table-tags-show-rule, attributes: pdftags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set table(columns: (10pt, auto))
#show table: it => it.columns
#table[A][B][C][D]
