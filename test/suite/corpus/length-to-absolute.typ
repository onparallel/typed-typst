// Typst 0.15.1 test suite: tests/suite/layout/length.typ, case length-to-absolute, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test length `to-absolute` method.
#set text(size: 12pt)
#context {
  test((6pt).to-absolute(), 6pt)
  test((6pt + 10em).to-absolute(), 126pt)
  test((10em).to-absolute(), 120pt)
}

#set text(size: 64pt)
#context {
  test((6pt).to-absolute(), 6pt)
  test((6pt + 10em).to-absolute(), 646pt)
  test((10em).to-absolute(), 640pt)
}
