// Typst 0.15.1 test suite: tests/suite/layout/flow/footnote.typ, case issue-5435-footnote-migration-in-floats.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that a footnote should not prompt migration when in a float that was
// queued to the next page (due to the float being too large), even if the
// footnote does not fit, breaking the footnote invariant.
#set page(height: 50pt)

#place(
  top,
  float: true,
  {
    v(100pt)
    footnote[a]
  }
)
#place(
  top,
  float: true,
  footnote[b]
)
