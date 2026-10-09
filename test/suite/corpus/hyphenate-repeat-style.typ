// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-repeat-style.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that a repeated hard hyphen keeps its styles.
#set page(width: 2cm)
#set text(lang: "es")
Hello-#text(red)[world]
