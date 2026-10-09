// Converted from test/suite/corpus/text-tracking-changed-temporarily.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, doc, em, inline, pt, space, text } from '../../../src/index.ts'

export default () => {
  return doc(inline`I'm in${text({ tracking: add(em(0.15), pt(1.5)) }, inline`${space}spaace`)}!`)
}
