// Typst 0.15.1 test suite: tests/suite/layout/flow/orphan.typ, case issue-1445-widow-orphan-unnecessary-skip.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that widow/orphan prevention doesn't unnecessarily move things
// to another page.
#set page(width: 16cm)
#block(height: 30pt, fill: aqua, columns(2, lorem(19)))
