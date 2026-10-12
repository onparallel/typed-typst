// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-vertical-alignment-in-item.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: auto)
- a
- #align(bottom)[b]
- c

d

#set page(height: 10em)
- a
- #align(bottom)[b]
- c

d
