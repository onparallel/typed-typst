// Typst 0.15.1 test suite: tests/suite/model/link.typ, case link-on-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Link containing a block.
#link("https://example.com/", block[
  My cool rhino
  #box(move(dx: 10pt, image("/assets/images/rhino.png", width: 1cm)))
])
