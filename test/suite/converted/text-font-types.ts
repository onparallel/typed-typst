// Converted from test/suite/corpus/text-font-types.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, let_, m, regex, set, text } from '../../../src/index.ts'

export default () => {
  const [ubuntuDecl, ubuntu] = let_('ubuntu', { name: 'Ubuntu', covers: regex('[ -￿]') })
  return doc(m.lines(ubuntuDecl, set(text, { font: ubuntu }), set(text, { font: [ubuntu, 'Ubuntu'] })))
}
