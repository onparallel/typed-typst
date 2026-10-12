// Typst 0.15.1 test suite: tests/suite/visualize/gradient.typ, case gradient-curve-stroke-quad.
// Copyright Typst contributors, Apache-2.0 (https://github.com/typst/typst).
#set page(width: auto, height: auto, margin: 5pt)
#let test = g => {
  box(width: 100pt, height: 100pt, {
    place(dx: 40pt, dy: 40pt, circle(radius: 10pt, fill: g))
    for i in range(0,12){
      place(dx: 50pt + 12pt*calc.cos(i*30deg), dy: 50pt + 12pt*calc.sin(i*30deg),
        curve(
          curve.quad((18pt * calc.cos((i+1)*30deg), 18pt * calc.sin((i+1)*30deg)), (36pt * calc.cos(i*30deg), 36pt * calc.sin(i*30deg))),
          stroke: g + 10pt,
        )
      )
    }
  })
}
#grid(columns: 4,
  ..(0deg, 30deg, 45deg, 90deg, 180deg, -125deg).map(
    a => test(gradient.linear(yellow, black, angle: a).sharp(4))),
  test(gradient.radial(blue, orange).sharp(4)),
  test(gradient.conic(..color.map.spectral).sharp(12)),
)
