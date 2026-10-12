// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-covers-riffle.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Repeatedly use two fonts alternately.
#set text(font: (
  (name: "Noto Color Emoji", covers: regex("[🔗⛓‍💥]")),
  (name: "Twitter Color Emoji", covers: regex("[^🖥️]")),
  "Noto Color Emoji",
))

🔗⛓‍💥🖥️🔑

// The above should be the same as:
#{
  text(font: "Noto Color Emoji", "🔗⛓‍💥🖥️")
  text(font: "Twitter Color Emoji", "🔑")
}

// but not:
#text(font: "Twitter Color Emoji", "🔗⛓‍💥🖥️🔑")
