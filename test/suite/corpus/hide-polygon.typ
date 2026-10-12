// Typst 0.15.1 test suite: tests/suite/layout/hide.typ, case hide-polygon.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
Hidden:
#hide[
  #polygon((20%, 0pt),
    (60%, 0pt),
    (80%, 2cm),
    (0%,  2cm),)
]
#polygon((20%, 0pt),
  (60%, 0pt),
  (80%, 2cm),
  (0%,  2cm),)
