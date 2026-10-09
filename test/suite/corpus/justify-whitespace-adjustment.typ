// Typst 0.15.1 test suite: tests/suite/layout/inline/justify.typ, case justify-whitespace-adjustment.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test punctuation whitespace adjustment
#set page(width: auto)
#set text(lang: "zh", font: "Noto Serif CJK SC")
#set par(justify: true)
#rect(inset: 0pt, width: 80pt, fill: rgb("eee"))[
  “引号测试”，还，

  《书名》《测试》下一行

  《书名》《测试》。
]

「『引号』」。“‘引号’”。
