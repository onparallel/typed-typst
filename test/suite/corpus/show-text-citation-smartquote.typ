// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-citation-smartquote.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show "hey \"": [@arrgh]
#show "dis": [@distress]
@netwok hey " dis

#show bibliography: none
#bibliography("/assets/bib/works.bib", style: "american-physics-society")
