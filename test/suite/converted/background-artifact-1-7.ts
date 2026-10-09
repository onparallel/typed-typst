// Converted from test/suite/corpus/background-artifact-1-7.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, eastern, inline, m, page, pdf, rect, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { fill: eastern }), inline(rect(), space, pdf.artifact({ kind: 'background' }, circle()))),
  )
}
