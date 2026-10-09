// Converted from test/suite/corpus/pad-expanding-contents.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, h, inline, pad, pt } from '../../../src/index.ts'

export default () => {
  return doc(inline(pad({ left: pt(10), right: pt(10) }, inline`PL ${h(fr(1))} PR`)))
}
