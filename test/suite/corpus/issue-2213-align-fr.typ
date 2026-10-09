// Typst 0.15.1 test suite: tests/suite/layout/align.typ, case issue-2213-align-fr.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test a mix of alignment and fr units (fr wins).
#set page(height: 80pt)
A
#v(1fr)
B
#align(bottom + right)[C]
