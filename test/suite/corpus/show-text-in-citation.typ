// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-in-citation.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#show "A": "B"
#show "[": "("
#show "]": ")"
#show "[2]": set text(red)

@netwok A \
@arrgh B

#show bibliography: none
#bibliography("/assets/bib/works.bib")
