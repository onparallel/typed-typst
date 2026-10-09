// Converted from test/suite/corpus/ops-assign-to-shadowed-std-constant.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [rectDecl, rect_2] = let_('rect', '')
  return doc(m.lines(rectDecl, inline(unsafeRaw.code<any>`(rect = "hi")`)))
}
