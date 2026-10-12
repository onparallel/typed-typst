// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case bidi-explicit-dir.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test explicit dir
#set text(dir: rtl)
#text("8:00 - 9:00", dir: ltr) בבוקר
#linebreak()
ב #text("12:00 - 13:00", dir: ltr) בצהריים
