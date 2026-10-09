// Converted from test/suite/corpus/text-font-variable-custom-soft.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blocks, doc, inline, m, pct, pt, scale, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'Fraunces', size: pt(100) }),
      inline(
        scale(
          { reflow: true },
          pct(20),
          blocks(
            m.lines(
              set(text, { variations: { SOFT: 0 } }),
              inline`Soft? ${set(text, { variations: { SOFT: 100 } })} Soft!`,
            ),
          ),
        ),
      ),
    ),
  )
}
