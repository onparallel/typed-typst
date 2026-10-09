// Converted from test/suite/corpus/raw-block-no-parbreaks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline`Text ${raw({ block: true, lang: 'rust' }, 'fn code() {}')} Text`)
}
