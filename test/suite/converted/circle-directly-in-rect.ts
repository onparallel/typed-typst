// Converted from test/suite/corpus/circle-directly-in-rect.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { circle, doc, external, inline, pt, rect } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  const conifer = external('conifer')
  return doc(inline(rect({ width: pt(40), height: pt(30), fill: forest }, circle({ fill: conifer }))))
}
