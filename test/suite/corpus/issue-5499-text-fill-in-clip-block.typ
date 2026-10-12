// Typst 0.15.1 test suite: tests/suite/text/font.typ, case issue-5499-text-fill-in-clip-block.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).

#let t = tiling(
  size: (30pt, 30pt),
  relative: "parent",
  square(
    size: 30pt,
    fill: gradient
      .conic(..color.map.rainbow),
  )
)

#block(clip: false, height: 2em, {
  text(fill: blue, "Hello")
  [ ]
  text(fill: blue.darken(20%).transparentize(50%), "Hello")
  [ ]
  text(fill: gradient.linear(..color.map.rainbow), "Hello")
  [ ]
  text(fill: t, "Hello")
})
#block(clip: true, height: 2em, {
  text(fill: blue, "Hello")
  [ ]
  text(fill: blue.darken(20%).transparentize(50%), "Hello")
  [ ]
  text(fill: gradient.linear(..color.map.rainbow), "Hello")
  [ ]
  text(fill: t, "Hello")
})
