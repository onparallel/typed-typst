// Typst 0.15.1 test suite: tests/suite/math/syntax.typ, case issue-2044-invalid-parsed-ident, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// In this bug, the dot at the end was causing the right parenthesis to be
// parsed as an identifier instead of the closing right parenthesis.
$floor(phi.alt.)$
$floor(phi.alt. )$
