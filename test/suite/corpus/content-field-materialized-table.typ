// Typst 0.15.1 test suite: tests/suite/foundations/content.typ, case content-field-materialized-table.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that fields from set rules are materialized into the element before
// a show rule runs.
#set table(columns: (10pt, auto))
#show table: it => it.columns
#table[A][B][C][D]
