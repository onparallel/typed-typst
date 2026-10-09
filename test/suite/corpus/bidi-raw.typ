// Typst 0.15.1 test suite: tests/suite/layout/inline/bidi.typ, case bidi-raw.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Mixing raw
#set text(lang: "he")
לדוג. `if a == b:` זה תנאי
#set raw(lang: "python")
לדוג. `if a == b:` זה תנאי

#show raw: set text(dir:rtl)
לתכנת בעברית `אם א == ב:`
