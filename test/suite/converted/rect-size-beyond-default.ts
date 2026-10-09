// Converted from test/suite/corpus/rect-size-beyond-default.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pt, rect, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(rect(), space, rect({ height: pt(60) }), space, rect({ width: pt(60) })))
}
