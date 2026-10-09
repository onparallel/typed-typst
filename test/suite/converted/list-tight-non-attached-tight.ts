// Converted from test/suite/corpus/list-tight-non-attached-tight.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, m, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(block, { spacing: pt(15) }), 'Hello', m.list(m.item(['A'])), 'World'),
    m.list(m.item(['B']), m.item(['C'])),
    'More.',
  )
}
