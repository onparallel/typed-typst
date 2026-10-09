// Converted from test/suite/corpus/list-marker-closure.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, list, m, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(list, { marker: unsafeRaw.code<any>`n => if n == 1 [--] else [•]` }),
      m.list(
        m.item(['A']),
        m.item(m.lines('B', m.list(m.item(['C']), m.item(m.lines('D', m.list(m.item(['E']))))))),
        m.item(['F']),
      ),
    ),
  )
}
