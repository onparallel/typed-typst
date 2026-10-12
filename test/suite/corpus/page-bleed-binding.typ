// Typst 0.15.1 test suite: tests/suite/layout/page.typ, case page-bleed-binding.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(
  bleed: (inside: 10pt, outside: 5pt, top: 5pt, bottom: 5pt),
  margin: (outside: 10pt, inside: 5pt, top: 10pt, bottom: 10pt),
)

#rect(width: 100%)
#pagebreak()
#rect(width: 100%)
