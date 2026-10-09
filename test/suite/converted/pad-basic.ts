// Converted from test/suite/corpus/pad-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, external, inline, m, pad, pt, rect, rgb, set } from '../../../src/index.ts'

export default () => {
  const conifer = external('conifer')
  return doc(
    inline(pad({ left: pt(10) }, inline`Indented!`)),
    m.lines(
      set(rect, { inset: pt(0) }),
      inline(
        rect(
          { fill: conifer },
          pad({ right: pt(20) }, pt(10), rect({ width: pt(20), height: pt(20), fill: rgb('eb5278') })),
        ),
      ),
    ),
    inline`Hi ${box(pad({ left: pt(10) }, inline`A`))} there`,
  )
}
