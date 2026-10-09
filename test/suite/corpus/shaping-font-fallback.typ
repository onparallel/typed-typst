// Typst 0.15.1 test suite: tests/suite/layout/inline/shaping.typ, case shaping-font-fallback.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(font: ("Libertinus Serif", "Noto Sans Arabic"))
// Font fallback for emoji.
A😀B

// Font fallback for entire text.
دع النص يمطر عليك

// Font fallback in right-to-left text.
ب🐈😀سم

// Multi-layer font fallback.
Aب😀🏞سمB

// Font fallback with composed emojis and multiple fonts.
01️⃣2

// Tofus are rendered with the first font.
A🐈ዲሞB
