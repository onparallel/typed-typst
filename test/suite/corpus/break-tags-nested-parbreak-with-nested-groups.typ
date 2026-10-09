// Typst 0.15.1 test suite: tests/suite/pdftags/break.typ, case break-tags-nested-parbreak-with-nested-groups, attributes: pdftags.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#let target = "tel:123"

Start of the first paragraph #link(target)[
  `group before`
  #quote[
    `group before`
    Part of the first paragraph.

    Start of the second paragraph
  ]
] Part of the second paragraph.
