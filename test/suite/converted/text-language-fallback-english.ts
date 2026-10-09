// Converted from test/suite/corpus/text-language-fallback-english.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, outline, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'qaa' }),
      inline(outline(), space, set(text, { lang: 'qaa', region: 'aa' }), space, outline()),
    ),
  )
}
