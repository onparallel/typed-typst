// Typst 0.15.1 test suite: tests/suite/layout/grid/footers.typ, case issue-6666-auto-hlines-around-footer.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#table(
	columns: 2,
	table.hline(stroke: 2pt + blue),
	table.footer([*foo*], [*bar*]),
	table.hline(stroke: 8pt),
)
