// Converted from test/suite/corpus/grid-columns-sizings-rect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  cm,
  define,
  doc,
  external,
  fr,
  grid,
  inline,
  m,
  mm,
  page,
  pct,
  pt,
  rect,
  rgb,
  set,
} from '../../../src/index.ts'

export default () => {
  const cell = define('cell')
    .pos('width', T.any)
    .pos('color', T.any)
    .returns(T.any)
    .body((p) => rect({ width: p['width'], height: cm(2), fill: p['color'] }))
  const forest = external('forest')
  const conifer = external('conifer')
  return doc(
    m.lines(
      cell.decl,
      set(page, { width: pt(100), height: pt(140) }),
      inline(
        grid(
          { columns: [auto, fr(1), fr(3), cm(0.25), pct(3), add(mm(2), pct(10))] },
          cell(cm(0.5), rgb('2a631a')),
          cell(pct(100), forest),
          cell(pct(100), conifer),
          cell(pct(100), rgb('ff0000')),
          cell(pct(100), rgb('00ff00')),
          cell(pct(80), rgb('00faf0')),
          cell(cm(1), rgb('00ff00')),
          cell(cm(0.5), rgb('2a631a')),
          cell(pct(100), forest),
          cell(pct(100), conifer),
          cell(pct(100), rgb('ff0000')),
          cell(pct(100), rgb('00ff00')),
        ),
      ),
    ),
  )
}
