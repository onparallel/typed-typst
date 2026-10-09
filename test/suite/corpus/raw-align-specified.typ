// Typst 0.15.1 test suite: tests/suite/text/raw.typ, case raw-align-specified.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Text inside raw block should follow the specified alignment.
#set page(width: 180pt)
#set text(6pt)

#align(center, raw(
  lang: "typ",
  block: true,
  align: right,
  "#let f(x) = x\n#align(center, line(length: 1em))",
))
