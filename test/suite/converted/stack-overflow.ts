// Converted from test/suite/corpus/stack-overflow.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, external, inline, m, page, pt, rect, set, stack } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  const forest = external('forest')
  return doc(
    m.lines(
      set(page, { width: pt(50), height: pt(30), margin: pt(0) }),
      inline(
        box(
          stack(
            rect({ width: pt(40), height: pt(20), fill: conifer }),
            rect({ width: pt(30), height: pt(13), fill: forest }),
          ),
        ),
      ),
    ),
  )
}
