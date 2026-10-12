// Typst 0.15.1 test suite: tests/suite/model/bibliography.typ, case bibliography-source-types, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let src = ```yaml
hi:
  type: Book
```

#show heading: none
#bibliography((
  "/assets/bib/works.bib",
  path("/assets/bib/works_too.bib"),
  bytes(src.text)
))
