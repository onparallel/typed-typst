// Typst 0.15.1 test suite: tests/suite/layout/flow/flow.typ, case issue-3355-metadata-weak-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 50pt)
#block(width: 100%, height: 30pt, fill: aqua)
#metadata(none)
#v(10pt, weak: true)
Hi
