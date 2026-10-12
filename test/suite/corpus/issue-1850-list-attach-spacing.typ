// Typst 0.15.1 test suite: tests/suite/model/list.typ, case issue-1850-list-attach-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// List attachment should only work with paragraphs, not other blocks.
#set page(width: auto)
#let part = box.with(stroke: 1pt, inset: 3pt)
#{
  part[
    $ x $
    - A
  ]
  part($ x $ + list[A])
  part($ x $ + list[ A ])
  part[
    $ x $

    - A
  ]
  part($ x $ + parbreak() + list[A])
  part($ x $ + parbreak() + parbreak() + list[A])
}
