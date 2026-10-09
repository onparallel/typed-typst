// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Styled with underline and color.
#show link: it => underline(text(fill: rgb("283663"), it))
You could also make the
#link("https://html5zombo.com/")[link look way more typical.]
