// Converted from test/suite/corpus/pagebreak-weak-place.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, pagebreak, place, right } from '../../../src/index.ts'

export default () => {
  return doc(inline`First ${pagebreak({ weak: true })} ${place(right, inline`placed A`)} ${pagebreak({ weak: true })}
Third`)
}
