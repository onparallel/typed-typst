// Converted from test/suite/corpus/gradient-curve-stroke.typ by scripts/convert-suite.ts — do not edit.
import {
  auto,
  black,
  blue,
  box,
  call,
  circle,
  codeBlock,
  color,
  data,
  deg,
  doc,
  gradient,
  grid,
  inline,
  let_,
  m,
  orange,
  page,
  place,
  pt,
  set,
  spread,
  unsafeRaw,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const [testDecl, test] = let_('test', (g) =>
    codeBlock(
      [],
      box(
        { width: pt(100), height: pt(100) },
        codeBlock([
          place({ dx: pt(40), dy: pt(40) }, circle({ radius: pt(10), fill: g })),
          unsafeRaw.code({ g })<any>`for i in range(0,12){
      place(dx: 50pt + 12pt*calc.cos(i*30deg), dy: 50pt + 12pt*calc.sin(i*30deg),
        curve(
          curve.line((36pt * calc.cos(i*30deg), 36pt * calc.sin(i*30deg))),
          stroke: g + 10pt,
        )
      )
    }`,
        ]),
      ),
    ),
  )
  return doc(
    m.lines(
      set(page, { width: auto, height: auto, margin: pt(5) }),
      testDecl,
      inline(
        grid(
          { columns: 4 },
          spread(
            data([deg(0), deg(30), deg(45), deg(90), deg(180), deg(-125)]).map((a) =>
              call(test, gradient.linear({ angle: a }, yellow, black).sharp(4)),
            ),
          ),
          call(test, gradient.radial(blue, orange).sharp(4)),
          call(test, gradient.conic(spread(color.map.spectral)).sharp(12)),
        ),
      ),
    ),
  )
}
