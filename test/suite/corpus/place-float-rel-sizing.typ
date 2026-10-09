// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-rel-sizing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt, columns: 2)
#set place(float: true, clearance: 10pt)
#set rect(width: 70%)

#place(top + center, scope: "parent", rect[I])
#place(top + center, rect[II])

// This test result is not ideal: The first column takes 30% of the full page,
// while the second takes 30% of the remaining space since there is no concept
// of `full` for followup pages.
#set align(bottom)
#rect(width: 100%, height: 30%)
#rect(width: 100%, height: 30%)
