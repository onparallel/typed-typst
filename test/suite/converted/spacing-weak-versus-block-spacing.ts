// Converted from test/suite/corpus/spacing-weak-versus-block-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, cm, doc, inline, pt, v } from '../../../src/index.ts'

export default () => {
  return doc(inline`0 ${v({ weak: true }, cm(1))} ${block({ above: cm(2), below: pt(0), height: pt(0) })} 1 ${v({ weak: true }, cm(1))}
2`)
}
