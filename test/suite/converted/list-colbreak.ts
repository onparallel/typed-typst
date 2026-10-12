// Converted from test/suite/corpus/list-colbreak.typ by scripts/convert-suite.ts — do not edit.
import { colbreak, doc, m, space } from '../../../src/index.ts'

export default () => {
  return doc(m.list(m.item(['Abc def', space, colbreak(), space, 'ghi jkl', space, colbreak(), space, 'mno pqr'])))
}
