// Typst 0.15.1 test suite: tests/suite/styling/set.typ, case set-vs-construct-3.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// The inner rectangle should also be yellow here.
// (and therefore invisible)
#[#set rect(fill: yellow);#text(1em, rect(inset: 5pt, rect()))]
