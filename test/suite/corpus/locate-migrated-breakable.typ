// Typst 0.15.1 test suite: tests/suite/introspection/locate.typ, case locate-migrated-breakable.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that when a breakable element fully migrates to the next page without
// orphan frames, its position correctly reflects that.
#set page(height: 40pt)
A
#block[B]<b>

#context test(
  locate(<b>).position(),
  (page: 2, x: 10pt, y: 10pt),
)
