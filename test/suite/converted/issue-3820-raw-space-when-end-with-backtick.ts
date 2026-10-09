// Converted from test/suite/corpus/issue-3820-raw-space-when-end-with-backtick.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw({ block: true, lang: 'typ' }, '`code`')), inline(raw({ block: true, lang: 'typ' }, '`code`')))
}
