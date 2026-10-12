// Typst 0.15.1 test suite: tests/suite/model/list.typ, case list-expand-auto.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Lists should shrink to fit their own contents inside auto-width pages.
#set page(width: auto)
- #align(center)[a]
- #rect(width: 4em, height: 1em, fill: red)

longlonglonglonglonglonglong
