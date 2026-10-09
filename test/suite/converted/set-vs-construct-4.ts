// Converted from test/suite/corpus/set-vs-construct-4.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, inline, pt, rect, yellow } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${box(rect({ fill: yellow, inset: pt(5) }, rect()))} B`)
}
