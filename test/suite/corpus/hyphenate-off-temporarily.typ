// Typst 0.15.1 test suite: tests/suite/layout/inline/hyphenate.typ, case hyphenate-off-temporarily.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test disabling hyphenation for short passages.
#set page(width: 110pt)
#set text(hyphenate: true)

Welcome to wonderful experiences. \
Welcome to `wonderful` experiences. \
Welcome to #text(hyphenate: false)[wonderful] experiences. \
Welcome to wonde#text(hyphenate: false)[rf]ul experiences. \

// Test enabling hyphenation for short passages.
#set text(hyphenate: false)
Welcome to wonderful experiences. \
Welcome to wo#text(hyphenate: true)[nd]erful experiences. \
