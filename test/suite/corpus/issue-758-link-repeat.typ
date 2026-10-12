// Typst 0.15.1 test suite: tests/suite/model/link.typ, case issue-758-link-repeat.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let url = "https://typst.org/"
#let body = [Hello #box(width: 1fr, repeat[.])]

Inline: #link(url, body)

#link(url, block(inset: 4pt, [Block: ] + body))
