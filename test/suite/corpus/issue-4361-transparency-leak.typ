// Typst 0.15.1 test suite: tests/suite/visualize/color.typ, case issue-4361-transparency-leak.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that transparency doesn't leak from shapes to images in PDF. The PNG
// test doesn't validate it, but at least we can discover regressions on the PDF
// output with a PDF comparison script.
#rect(fill: red.transparentize(50%))
#image("/assets/images/tiger.jpg", width: 45pt)
