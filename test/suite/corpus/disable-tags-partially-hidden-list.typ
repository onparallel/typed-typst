// Typst 0.15.1 test suite: tests/suite/pdftags/disable.typ, case disable-tags-partially-hidden-list, attributes: pdftags pdfstandard(ua-1).
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// FIXME(accessibility): In realization, tags inside of list groupings aren't
// handled. Thus if the head of the list is visible, all tags of list items
// will be emitted before (outside) the hide element. And if the head is not
// visible, all tags of list items will be emitted inside the hide element.
= Tail hidden
- a
#hide[
- b
  - c
]

= Head hidden
#hide[
- a
]
- b
  - c
