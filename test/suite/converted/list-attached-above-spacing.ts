// Converted from test/suite/corpus/list-attached-above-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, list, m, pt, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(show(list, set(block, { above: pt(100) })), 'Hello', m.list(m.item(['A'])), 'World', m.list(m.item(['B']))),
  )
}
