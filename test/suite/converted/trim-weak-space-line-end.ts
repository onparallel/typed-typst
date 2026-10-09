// Converted from test/suite/corpus/trim-weak-space-line-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, cm, doc, h, inline, m, right, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(align, { alignment: right }), inline`Hello ${h({ weak: true }, cm(2))}`))
}
