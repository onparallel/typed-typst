// Typst 0.15.1 test suite: tests/suite/layout/grid/headers.typ, case issue-6666-auto-hlines-around-header.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
	columns: 2,
	table.hline(stroke: 2pt + blue),
	table.header([*foo*], [*bar*]),
	table.hline(stroke: 1.5pt + red),
	table.cell(colspan: 2)[_asdf_],
	table.hline(stroke: 1.5pt + red),
	[a], [b],
	[c], [d],
)
