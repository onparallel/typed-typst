// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-5503-cite-group-interrupted-by-par-align.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// `par` and `align` are block-level and should interrupt a cite group
@netwok
@arrgh
#par(leading: 5em)[@netwok]
#par[@arrgh]
@netwok
@arrgh
#align(right)[@netwok]
@arrgh

#show bibliography: none
#bibliography("/assets/bib/works.bib")
