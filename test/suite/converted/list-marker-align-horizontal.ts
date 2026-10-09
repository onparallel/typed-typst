// Converted from test/suite/corpus/list-marker-align-horizontal.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { calc, codeBlock, context, counter, doc, inline, list, m, set, start, times } from '../../../src/index.ts'

export default () => {
  return doc(
    set(list, {
      marker: codeBlock([
        counter('list').update((n) => calc.max(times(n, 10), 1)),
        context((ctx) => counter('list').display(ctx)),
      ]),
    }),
    m.list(m.item(['Item']), m.item(['Item']), m.item(['Item'])),
    m.lines(set(list, { markerAlign: start }), inline(counter('list').update(0))),
    m.list(m.item(['Item']), m.item(['Item']), m.item(['Item'])),
  )
}
