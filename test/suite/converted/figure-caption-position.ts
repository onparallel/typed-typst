// Converted from test/suite/corpus/figure-caption-position.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, set, top } from '../../../src/index.ts'

export default () => {
  return doc(set(figure.caption, { position: top }))
}
