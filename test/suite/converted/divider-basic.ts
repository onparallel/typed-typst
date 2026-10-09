// Converted from test/suite/corpus/divider-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { divider, doc, inline, m, page, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { width: pt(200) }), inline`Before ${divider()} After`))
}
