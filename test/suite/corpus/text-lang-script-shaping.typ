// Typst 0.15.1 test suite: tests/suite/text/lang.typ, case text-lang-script-shaping.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Verify that writing script/language combination has an effect
#{
  set text(size:20pt)
  set text(script: "latn", lang: "en")
  [Ş ]
  set text(script: "latn", lang: "ro")
  [Ş ]
  set text(script: "grek", lang: "ro")
  [Ş ]
}
