// Typst 0.15.1 test suite: tests/suite/model/cite.typ, case issue-3699-cite-twice-et-al.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Citing a second time showed all authors instead of "et al".
@mcintosh_anxiety \
@mcintosh_anxiety
#show bibliography: none
#bibliography("/assets/bib/works.bib", style: "chicago-author-date")
