// Converted from test/suite/corpus/gradient-line-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  auto,
  box,
  circle,
  codeBlock,
  data,
  deg,
  doc,
  grid,
  inline,
  m,
  page,
  place,
  pt,
  set,
  spread,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: auto, margin: pt(5) }),
      unsafeRaw.markup`#let test = g => {
  box(width: 100pt, height: 100pt, {
    place(dx: 40pt, dy: 40pt, circle(radius: 10pt, fill: g))
    for i in range(0,12){
      place(dx: 50pt + 12pt*calc.cos(i*30deg), dy: 50pt + 12pt*calc.sin(i*30deg),
        line(length: 36pt, angle: i*30deg, stroke: g + 10pt)
      )
    }
  })
}`,
      inline(
        grid(
          { columns: 4 },
          spread(
            data([deg(0), deg(30), deg(45), deg(90), deg(180), deg(-125)]).map(
              unsafeRaw.code<any>`a => test(gradient.linear(yellow, black, angle: a).sharp(4))`,
            ),
          ),
          unsafeRaw.code<any>`test(gradient.radial(blue, orange).sharp(4))`,
          unsafeRaw.code<any>`test(gradient.conic(..color.map.spectral).sharp(12))`,
        ),
      ),
    ),
  )
}
