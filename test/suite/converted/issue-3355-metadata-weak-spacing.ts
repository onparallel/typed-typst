// Converted from test/suite/corpus/issue-3355-metadata-weak-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { aqua, block, doc, inline, m, metadata, page, pct, pt, set, v } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(50) }),
      inline`${block({ width: pct(100), height: pt(30), fill: aqua })} ${metadata(null)} ${v({ weak: true }, pt(10))}
Hi`,
    ),
  )
}
