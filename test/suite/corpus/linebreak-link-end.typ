// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case linebreak-link-end.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that there's no unconditional break at the end of a link.
#set page(width: 180pt, height: auto, margin: auto)
#set text(11pt)

For info see #link("https://myhost.tld").
