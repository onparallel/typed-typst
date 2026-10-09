// Converted from test/suite/corpus/issue-grid-base-auto-row-list.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, m, pct, rect } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      inline(rect({ width: pct(100), height: em(1) })),
      m.list(
        m.item(
          m.lines(
            inline(rect({ width: pct(100), height: em(1) })),
            m.list(m.item([rect({ width: pct(100), height: em(1) })])),
          ),
        ),
      ),
    ),
  )
}
