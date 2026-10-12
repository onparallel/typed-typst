// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case issue-1373-bidi-tofus.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that shaping missing characters in both left-to-right and
// right-to-left directions does not cause a crash.
#"\u{590}\u{591}\u{592}\u{593}"

#"\u{30000}\u{30001}\u{30002}\u{30003}"
