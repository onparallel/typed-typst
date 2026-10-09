// Converted from test/suite/corpus/trim-weak-space-line-beginning.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, h, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`${h({ weak: true }, cm(2))} Hello`)
}
