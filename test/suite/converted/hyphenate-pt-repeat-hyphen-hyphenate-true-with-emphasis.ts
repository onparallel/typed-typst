// Converted from test/suite/corpus/hyphenate-pt-repeat-hyphen-hyphenate-true-with-emphasis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, emph, inline, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: cm(4) }), set(text, { lang: 'pt', hyphenate: true })),
    inline`Alguma coisa no ${emph(inline`arco-da-velha`)} é algo que está muito longe.`,
  )
}
