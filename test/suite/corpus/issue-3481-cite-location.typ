// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-3481-cite-location.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The locator was cloned in the wrong location, leading to inconsistent
// citation group locations in the second footnote attempt.
#set page(height: 60pt)

// First page shouldn't be empty because otherwise we won't skip the first
// region which causes the bug in the first place.
#v(10pt)

// Everything moves to the second page because we want to keep the line and
// its footnotes together.
#footnote[@netwok \ A]

#show bibliography: none
#bibliography("/assets/bib/works.bib")
