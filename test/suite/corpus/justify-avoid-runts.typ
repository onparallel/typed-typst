// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case justify-avoid-runts.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that runts are avoided when it's not too costly to do so.
#set page(width: 124pt)
#set par(justify: true)
#for i in range(0, 20) {
	"a b c "
}
#"d"
