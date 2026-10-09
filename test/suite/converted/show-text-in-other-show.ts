// Converted from test/suite/corpus/show-text-in-other-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, inline, list, m, show } from '../../../src/index.ts'

export default () => {
  return doc(
    show(list, (it, ctx) => blocks(m.lines(show('World', inline`🌎`), inline(it)))),
    m.lines('World', m.list(m.item(['World']))),
  )
}
