// Typst 0.15.1 test suite: tests/suite/layout/flow/place.typ, case place-float-block-backlog.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(height: 100pt)
#v(60pt)
#place(top, float: true, rect())
#list(.."ABCDEFGHIJ".clusters())
