// Converted from test/suite/corpus/figure-tags-only-marked-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, inline, rect, red, space } from '../../../src/index.ts'

export default () => {
  return doc(inline(figure(inline(space, rect({ fill: red }), space))))
}
