// Converted from test/suite/corpus/smartquote-with-embedding-chars.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, linebreak, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'fr' }),
      inline`"${data('‪')}bonjour${data('‬')}" ${linebreak()} ${data('‪')}"bonjour"${data('‬')}`,
    ),
  )
}
