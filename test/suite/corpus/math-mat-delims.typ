// Typst 0.15.1 test suite: tests/suite/math/mat.typ, case math-mat-delims, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
$ mat(delim: #none, 1, 2; 3, 4) $

$ mat(delim: "(", 1, 2; 3, 4) $
$ mat(delim: \(, 1, 2; 3, 4) $
$ mat(delim: paren.l, 1, 2; 3, 4) $

$ mat(delim: "[", 1, 2; 3, 4) $
$ mat(delim: \[, 1, 2; 3, 4) $
$ mat(delim: bracket.l, 1, 2; 3, 4) $

$ mat(delim: "⟦", 1, 2; 3, 4) $
$ mat(delim: bracket.stroked.l, 1, 2; 3, 4) $

$ mat(delim: "{", 1, 2; 3, 4) $
$ mat(delim: \{, 1, 2; 3, 4) $
$ mat(delim: brace.l, 1, 2; 3, 4) $

$ mat(delim: "|", 1, 2; 3, 4) $
$ mat(delim: \|, 1, 2; 3, 4) $
$ mat(delim: bar.v, 1, 2; 3, 4) $

$ mat(delim: "‖", 1, 2; 3, 4) $
$ mat(delim: bar.v.double, 1, 2; 3, 4) $

$ mat(delim: "⟨", 1, 2; 3, 4) $
$ mat(delim: chevron.l, 1, 2; 3, 4) $
