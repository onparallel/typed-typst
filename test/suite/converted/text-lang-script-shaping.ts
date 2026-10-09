// Converted from test/suite/corpus/text-lang-script-shaping.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, pt, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      codeBlock([
        set(text, { size: pt(20) }),
        set(text, { script: 'latn', lang: 'en' }),
        inline`Ş${space}`,
        set(text, { script: 'latn', lang: 'ro' }),
        inline`Ş${space}`,
        set(text, { script: 'grek', lang: 'ro' }),
        inline`Ş${space}`,
      ]),
    ),
  )
}
