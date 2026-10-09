// Converted from test/suite/corpus/list-baseline-text-with-math.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, m, page, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto, height: auto }),
      m.list(
        m.item(
          m.lines(
            'Text',
            m.list(
              m.item(['Text', space, unsafeRaw.math.block`"O1" = (7 "O1" + 3 (display((sum_(i = 1)^4 L_i)/4)))/10`]),
              m.item([unsafeRaw.math.block`"O1" = (7 "O1" + 3 (display((sum_(i = 1)^4 L_i)/4)))/10`]),
            ),
          ),
        ),
      ),
    ),
  )
}
