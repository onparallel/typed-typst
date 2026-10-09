// Typst 0.15.1 test suite: tests/suite/layout/align.typ, case align-start-and-end.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test start and end alignment.
#rotate(-30deg, origin: end + horizon)[Hello]

#set text(lang: "de")
#align(start)[Start]
#align(end)[Ende]

#set text(lang: "ar", font: "Noto Sans Arabic")
#align(start)[يبدأ]
#align(end)[نهاية]
