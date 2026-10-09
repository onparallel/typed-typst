// Typst 0.15.1 test suite: tests/suite/model/heading.typ, case heading-offset-and-level.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Passing level directly still overrides all other set values
#set heading(numbering: "1.1", offset: 1)
#heading(level: 1)[Still level 1]
