// Converted from test/suite/corpus/issue-4662-math-mode-language-for-raw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline(raw({ lang: 'typm' }, 'pi^2')))
}
