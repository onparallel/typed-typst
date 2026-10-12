// Typst 0.15.1 test suite: tests/suite/layout/hide.typ, case issue-622-hide-meta-cite.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that metadata of hidden stuff stays available.
#set cite(style: "chicago-shortened-notes")

A pirate. @arrgh \
#set text(2pt)
#hide[
  A @arrgh pirate.
  #bibliography("/assets/bib/works.bib")
]
