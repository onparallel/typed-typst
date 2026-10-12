// Typst 0.15.1 test suite: tests/suite/styling/show-set.typ, case show-function-set-on-it.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// This doesn't have an effect. An element is materialized before any show
// rules run.
#show heading: it => { set heading(numbering: "(I)"); it }
= Heading
