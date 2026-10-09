// Converted from test/suite/corpus/list-wide-cannot-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { spacing: pt(15) }), 'Hello', m.list({ tight: false }, m.item(['A']), m.item(['B'])), 'World'),
  )
}
