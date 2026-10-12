// Typst 0.15.1 test suite: tests/suite/layout/inline/cjk.typ, case text-cjk-latin-spacing.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: 50pt + 10pt, margin: (x: 5pt))
#set text(lang: "zh", font: "Noto Serif CJK SC", cjk-latin-spacing: auto)
#set par(justify: true)

中文，中12文1中，文12中文

中文，中ab文a中，文ab中文

#set text(cjk-latin-spacing: none)

中文，中12文1中，文12中文

中文，中ab文a中，文ab中文
