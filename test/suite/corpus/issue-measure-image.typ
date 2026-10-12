// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case issue-measure-image, attributes: paged empty.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that image measurement doesn't turn `inf / some-value` into 0pt.
#context {
  let size = measure(image("/assets/images/tiger.jpg"))
  test(size, (width: 1024pt, height: 670pt))
}
