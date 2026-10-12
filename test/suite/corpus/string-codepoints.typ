// Typst 0.15.1 test suite: tests/suite/foundations/str.typ, case string-codepoints, attributes: eval.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#test("🏳️‍🌈!".codepoints(), ("🏳", "\u{fe0f}", "\u{200d}", "🌈", "!"))
