// Converted from test/suite/corpus/list-expand-auto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, auto, center, doc, em, inline, m, page, rect, red, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      m.list(m.item([align(center, inline`a`)]), m.item([rect({ width: em(4), height: em(1), fill: red })])),
    ),
    'longlonglonglonglonglonglong',
  )
}
