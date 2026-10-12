// Typst 0.15.1 test suite: tests/suite/text/font.typ, case text-font-covers-chinese.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Without ranges, the quotation mark is using the Latin font.
#set text(font: ("Ubuntu", "Noto Serif CJK SC"))
分别设置“中文”和English字体

// With ranges, the quotation mark is using the Chinese font.
#set text(font: ((name: "Noto Serif CJK SC", covers: regex("[\u{00B7}-\u{3134F}]")), "Ubuntu"))
分别设置“中文”和English字体

// With "latin-in-cjk", the quotation mark is also using the Chinese font.
#set text(font: ((name: "Ubuntu", covers: "latin-in-cjk"), "Noto Serif CJK SC"))
分别设置“中文”和English字体
