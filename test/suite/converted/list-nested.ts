// Converted from test/suite/corpus/list-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m } from '../../../src/index.ts'

export default () => {
  return doc(
    m.list(
      { tight: false },
      m.item(
        ['First level.'],
        m.list(
          { tight: false },
          m.item(
            ['Second level. There are multiple paragraphs.'],
            m.list(m.item(['Third level.'])),
            'Still the same bullet point.',
          ),
          m.item(['Still level 2.']),
        ),
      ),
      m.item(['At the top.']),
    ),
  )
}
