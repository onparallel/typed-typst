// Typst 0.15.1 test suite: tests/suite/math/stretch.typ, case math-stretch-horizontal-attach, attributes: paged html.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Test horizontal stretch interactions with attachments.
#show: it => context {
  set page(width: auto) if target() == "paged"
  it
}

$stretch(stretch(=, size: #4em))_A$
$stretch(arrow.hook, size: #5em)^"injective map"$
$stretch(arrow.hook, size: #200%)^"injective map"$

$ P = Q
    stretch(=)^(k = 0)_(forall i) R
    stretch(=, size: #150%)^(k = 0)_(forall i) S
    stretch(=, size: #2mm)^(k = 0)_(forall i) T \
  U stretch(equiv)^(forall i)_"Chern-Weil" V
    stretch(equiv, size: #(120% + 2mm))^(forall i)_"Chern-Weil" W $
