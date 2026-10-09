// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-colr-svg-glyphs-different-size.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(size: 11pt)
#text(font: "Noto Color Emoji", "🔗⛓‍💥🖥️🔑") \
#text(font: "Twitter Color Emoji", "🔗⛓‍💥🖥️🔑") \

#set text(size: 22pt)
#text(font: "Noto Color Emoji", "🔗⛓‍💥🖥️🔑") \
#text(font: "Twitter Color Emoji", "🔗⛓‍💥🖥️🔑") \
