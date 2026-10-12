// Typst 0.15.1 test suite: tests/suite/model/par.typ, case par-metadata-after-trimmed-space.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that metadata doesn't prevent trailing spaces from being trimmed.
#set par(justify: true, linebreaks: "simple")
#set text(hyphenate: false)
Lorem ipsum dolor #metadata(none) nonumy eirmod tempor.
