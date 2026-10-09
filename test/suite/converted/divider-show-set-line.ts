// Converted from test/suite/corpus/divider-show-set-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, divider, doc, inline, line, m, page, pt, red, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(200) }),
      show(divider, set(line, { stroke: add(pt(2), red) })),
      inline`Before ${divider()} After`,
    ),
  )
}
