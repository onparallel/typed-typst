// Converted from test/suite/corpus/flow-fr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, external, fr, h, inline, m, page, rect, set, space, text, v, white } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  return doc(
    m.lines(
      set(page, { height: cm(2) }),
      set(text, { fill: white }),
      inline(rect({ fill: forest }, inline`${space}${v(fr(1))} ${h(fr(1))} Hi you!${space}`)),
    ),
  )
}
