// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-2531-cite-show-set.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test show set rules on citations.
#show cite: set text(red)
A @netwok @arrgh.
B #cite(<netwok>) #cite(<arrgh>).

#show bibliography: none
#bibliography("/assets/bib/works.bib")
