// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-5503-cite-in-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The two aligned elements should be displayed in separate lines.
#align(right)[@netwok]
#align(right)[b]

#show bibliography: none
#bibliography("/assets/bib/works.bib")
