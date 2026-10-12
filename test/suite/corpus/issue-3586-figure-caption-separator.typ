// Typst 0.15.1 test suite: tests/suite/model/figure.typ, case issue-3586-figure-caption-separator.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that figure caption separator is synthesized correctly.
#show figure.caption: c => test(c.separator, [#": "])
#figure(table[], caption: [This is a test caption])
