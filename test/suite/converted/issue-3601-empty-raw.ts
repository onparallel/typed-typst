// Converted from test/suite/corpus/issue-3601-empty-raw.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw({ block: true, lang: 'typ' }, '')))
}
