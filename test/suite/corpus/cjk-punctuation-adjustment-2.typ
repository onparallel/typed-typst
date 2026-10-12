// Typst 0.15.1 test suite: tests/suite/layout/inline/cjk.typ, case cjk-punctuation-adjustment-2.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set text(lang: "zh", region: "CN", font: "Noto Serif CJK SC")
《书名〈章节〉》 // the space between 〉 and 》 should be squeezed

〔茸毛〕：很细的毛 // the space between 〕 and ： should be squeezed
