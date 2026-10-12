// Typst 0.15.1 test suite: tests/suite/visualize/image.typ, case issue-6869-image-zero-sized.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Primarily to ensure that it does not crash in PDF export.
#image("/assets/images/f2t.jpg", width: 0pt, height: 0pt)
