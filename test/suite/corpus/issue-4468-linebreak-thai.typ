// Typst 0.15.1 test suite: tests/suite/layout/inline/linebreak.typ, case issue-4468-linebreak-thai.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug, empty-range glyphs at line break boundaries could be duplicated.
// This happens for Thai specifically because it has both
// - line break opportunities
// - shaping that results in multiple glyphs in the same cluster
#set text(font: "Noto Sans Thai")
#h(85pt) งบิก
