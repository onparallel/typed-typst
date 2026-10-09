// Typst 0.15.1 test suite: tests/suite/layout/inline/shaping.typ, case issue-rtl-safe-to-break-panic.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that RTL safe-to-break doesn't panic even though newline
// doesn't exist in shaping output.
#set text(dir: rtl, font: "Noto Serif Hebrew")
\ ט
