// Converted from test/suite/corpus/lang-tags-propagation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { lang: 'nl' }), 'A paragraph.'),
    m.lines(
      set(text, { lang: 'es', region: 'co' }),
      m.list(
        m.item(
          m.lines(
            inline(text({ lang: 'de', region: null }, 'a')),
            m.list(
              m.item([text({ lang: 'de', region: 'at' }, 'b')]),
              m.item([text({ lang: 'de', region: null }, 'c')]),
            ),
          ),
        ),
        m.item([text({ lang: 'de', region: null }, 'd')]),
      ),
    ),
  )
}
