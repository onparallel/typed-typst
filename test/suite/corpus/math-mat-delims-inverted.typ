// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-delims-inverted, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
$ mat(delim: ")", 1, 2; 3, 4) $
$ mat(delim: \), 1, 2; 3, 4) $
$ mat(delim: paren.r, 1, 2; 3, 4) $

$ mat(delim: "]", 1, 2; 3, 4) $
$ mat(delim: \], 1, 2; 3, 4) $
$ mat(delim: bracket.r, 1, 2; 3, 4) $

$ mat(delim: "⟧", 1, 2; 3, 4) $
$ mat(delim: bracket.stroked.r, 1, 2; 3, 4) $

$ mat(delim: "}", 1, 2; 3, 4) $
$ mat(delim: \}, 1, 2; 3, 4) $
$ mat(delim: brace.r, 1, 2; 3, 4) $

$ mat(delim: "⟩", 1, 2; 3, 4) $
$ mat(delim: chevron.r, 1, 2; 3, 4) $
