// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case image-natural-dpi-sizing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that images aren't upscaled.
// Image is just 48x80 at 220dpi. It should not be scaled to fit the page
// width, but rather max out at its natural size.
#image("/assets/images/f2t.jpg")
