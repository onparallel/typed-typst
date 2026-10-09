// Typst 0.15.1 test suite: tests/suite/math/attach.typ, case math-attach-default-placement, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test default of limit attachments on relations at all sizes.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}
$ a =^"def" b quad a lt.eq_"really" b quad  a arrow.r.long.squiggly^"slowly" b $
$a =^"def" b quad a lt.eq_"really" b quad a arrow.r.long.squiggly^"slowly" b$

$a scripts(=)^"def" b quad a scripts(lt.eq)_"really" b quad a scripts(arrow.r.long.squiggly)^"slowly" b$
