// Converted from test/suite/corpus/raw-theme-set-to-none.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, m, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(raw, { theme: null }), inline(raw({ block: true, lang: 'typ' }, '#let foo = "bar"'))))
}
