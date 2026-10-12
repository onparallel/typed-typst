// Typst 0.15.1 test suite: tests/suite/styling/show-text.typ, case show-text-regex.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Another classic example.
#show "TeX": [T#h(-0.145em)#box(move(dy: 0.233em)[E])#h(-0.135em)X]
#show regex("(Lua)?(La)?TeX"): name => box(text(font: "New Computer Modern")[#name])

TeX, LaTeX, LuaTeX and LuaLaTeX!
