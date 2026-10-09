// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-limit-long, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test long limit attachments.
$ attach(product, t: 123456789) attach(product, t: 123456789, bl: x) \
  attach(product, b: 123456789) attach(product, b: 123456789, tr: x) $
$attach(limits(product), t: 123456789) attach(limits(product), t: 123456789, bl: x)$

$attach(limits(product), b: 123456789) attach(limits(product), b: 123456789, tr: x)$
