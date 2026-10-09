// Converted from test/suite/corpus/spacing-fr-weak-standalone-end.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, inline, m, page, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(60) }), inline`${v({ weak: false }, fr(1))} 1 ${v({ weak: true }, fr(1))}`))
}
