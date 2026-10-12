// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-pixmap-luma8.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#image(
  bytes(range(16).map(x => x * 16)),
  format: (
    encoding: "luma8",
    width: 4,
    height: 4,
  ),
  width: 1cm,
)
