// Typst 0.15.1 test suite: tests/suite/math/text.typ, case math-optical-size-frac-script-script, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test script-script in a fraction.
$ 1/(x^A) $
#[#set text(size:18pt); $1/(x^A)$] vs. #[#set text(size:14pt); $x^A$]
