// Converted from test/suite/corpus/issue-1920-linebreak-guillemets.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(125) }),
    m.lines(
      set(text, { lang: 'fr' }),
      inline`Les principales « guillemets ».${linebreak()} Et les autres ‹ guillemets › en français & suisse
romande.`,
    ),
    m.lines(set(text, { lang: 'de' }), 'Alternative »Anführungszeichen« in DE & AT.'),
  )
}
