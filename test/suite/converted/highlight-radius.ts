// Converted from test/suite/corpus/highlight-radius.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, highlight, inline, lorem, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline`${highlight({ radius: pt(3) }, inline`abc`)}, ${highlight({ radius: em(1) }, inline(lorem(5)))}`)
}
