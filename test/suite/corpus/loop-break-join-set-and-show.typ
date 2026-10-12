// Typst 0.15.1 test suite: tests/suite/scripting/loop.typ, case loop-break-join-set-and-show.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
// Should output `Some` in red, `Some` in blue and `Last` in green.
// Everything should be in smallcaps.
#for color in (red, blue, green, yellow) [
  #set text(font: "Roboto")
  #show: it => text(fill: color, it)
  #smallcaps(if color != green [
    Some
  ] else [
    Last
    #break
  ])
]
