// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-trailing-period.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that the period is trimmed.
#show link: underline
https://a.b.?q=%10#. \
Wahttp://link \
Nohttps:\//link \
Nohttp\://comment
