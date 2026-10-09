// Converted from test/suite/corpus/line-positioning.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  box,
  center,
  define,
  deg,
  doc,
  grid,
  inline,
  left,
  line,
  m,
  page,
  pct,
  place,
  pt,
  rgb,
  set,
  space,
  spread,
  text,
  times,
  unsafeRaw,
  v,
  white,
} from '../../../src/index.ts'

export default () => {
  const star = define('star')
    .pos('size', T.any)
    .rest('args', T.any)
    .returns(T.any)
    .body((p) =>
      box(
        { width: p['size'], height: p['size'] },
        blocks(
          m.lines(
            set(text, { spacing: pct(0) }),
            unsafeRaw.markup`#set line(..args)`,
            set(align, { alignment: left }),
            inline(
              v(pct(30)),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(9), pct(2)] })),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(38.7), pct(2)], angle: deg(-72) })),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(57.5), pct(2)], angle: deg(252) })),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(57.3), pct(2)] })),
              space,
              place(line({ length: pct(-30), start: [pct(88), pct(2)], angle: deg(-36) })),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(73.3), pct(48)], angle: deg(252) })),
              space,
              place(line({ length: pct(-30), start: [pct(73.5), pct(48)], angle: deg(36) })),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(25.4), pct(48)], angle: deg(-36) })),
              space,
              place(line({ length: unsafeRaw.code<any>`+30%`, start: [pct(25.6), pct(48)], angle: deg(-72) })),
              space,
              place(line({ length: unsafeRaw.code<any>`+32%`, start: [pct(8.5), pct(2)], angle: deg(34) })),
            ),
          ),
        ),
      ),
    )
  return doc(
    m.lines(set(page, { fill: rgb('0B1026') }), set(line, { stroke: white })),
    star.decl,
    inline(
      align(center, grid({ columns: 3, columnGutter: pt(10) }, spread(times([star({ stroke: pt(0.5) }, pt(20))], 9)))),
    ),
  )
}
