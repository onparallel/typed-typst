// Converted from test/suite/corpus/list-marker-align-unfolded-mixed.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  center,
  codeBlock,
  context,
  counter,
  doc,
  list,
  m,
  set,
  times,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(align, { alignment: center }),
      set(list, {
        markerAlign: top,
        marker: codeBlock([
          counter('b').step(),
          unsafeRaw.code<any>`context {
      "1" * counter("b").get().first()
    }`,
        ]),
      }),
    ),
    m.list(m.item(['abc']), m.item(['abc']), m.item(['abc'])),
  )
}
