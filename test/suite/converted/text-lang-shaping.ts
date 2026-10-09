// Converted from test/suite/corpus/text-lang-shaping.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, { font: 'Ubuntu' }),
    inline`Бб ${text({ lang: 'uk' }, inline`Бб`)} ${text({ lang: 'sr' }, inline`Бб`)}`,
  )
}
