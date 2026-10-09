// Converted from test/suite/corpus/figure-tags-bbox-of-square-with-stroke.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, figure, inline, pt, red, square } from '../../../src/index.ts'

export default () => {
  return doc(inline(figure({ alt: 'A square with a red stroke' }, square({ size: pt(60), stroke: add(pt(10), red) }))))
}
