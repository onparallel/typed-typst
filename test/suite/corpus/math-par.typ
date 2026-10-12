// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-par.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Ensure that math does not produce paragraphs.
#show par: highlight
$ a + "bc" + #[c] + #box[d] + #block[e] $
