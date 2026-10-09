// Converted from test/suite/corpus/block-multiple-pages-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(60) }), inline`A ${block({ height: pt(30) })} B`))
}
