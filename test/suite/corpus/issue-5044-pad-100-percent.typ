// Typst 0.15.1 test suite: tests/suite/layout/pad.typ, case issue-5044-pad-100-percent.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 30pt, height: 30pt)
#pad(100%, block(width: 1cm, height: 1cm, fill: red))
