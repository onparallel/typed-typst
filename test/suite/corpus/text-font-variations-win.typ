// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-variations-win.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that custom variations win over built-in settings.
#set text(font: "Mona Sans")
#text(style: "italic")[
  Italic \
  #text(variations: (ital: 0))[Not italic]
]
