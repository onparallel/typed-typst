// Converted from test/suite/corpus/list-marker-align-unaffected.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, doc, horizon, linebreak, m, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    set(align, { alignment: horizon }),
    m.list(m.item(['ABCDEF', linebreak(), space, 'GHIJKL', linebreak(), space, 'MNOPQR'])),
  )
}
