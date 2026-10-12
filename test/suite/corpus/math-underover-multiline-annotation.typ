// Typst 0.15.1 test suite: tests/suite/math/underover.typ, case math-underover-multiline-annotation, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test that multiline annotations do not change the baseline.
$ S = overbrace(beta (alpha) S I, "one line")
    - overbrace(mu (N), "two" \  "line") $
$ S = underbrace(beta (alpha) S I, "one line")
    - underbrace(mu (N), "two" \  "line") $
