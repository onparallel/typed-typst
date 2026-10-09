// Converted from test/suite/corpus/place-float-queued.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, figure, inline, m, page, pt, rect, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { height: pt(180) }), set(figure, { placement: auto })),
    inline`${figure({ caption: inline`I` }, rect({ height: pt(60) }))} ${figure({ caption: inline`II` }, rect({ height: pt(40) }))}
${figure({ caption: inline`III` }, rect())} A ${figure({ caption: inline`IV` }, rect())}`,
  )
}
