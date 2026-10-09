// Converted from test/suite/corpus/hyphenate-pt-repeat-hyphen-hyphenate-true.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: cm(4) }), set(text, { lang: 'pt', hyphenate: true })),
    'Alguma coisa no arco-da-velha é algo que está muito longe.',
  )
}
