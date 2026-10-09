// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-pixmap-lumaa8.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#image(
  bytes(range(16).map(x => (0x80, x * 16)).flatten()),
  format: (
    encoding: "lumaa8",
    width: 4,
    height: 4,
  ),
  width: 1cm,
)
