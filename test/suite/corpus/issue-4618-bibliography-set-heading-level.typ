// Typst 0.15.1 test suite: tests/suite/model/bibliography.typ, case issue-4618-bibliography-set-heading-level.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the bibliography block's heading is set to 2 by the show rule,
// and therefore should be rendered like a level-2 heading. Notably, this
// bibliography heading should not be underlined.
#show heading.where(level: 1): it => [ #underline(it.body) ]
#show bibliography: set heading(level: 2)

= Level 1
== Level 2
@Zee04

#bibliography("/assets/bib/works_too.bib")
