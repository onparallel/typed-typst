// Converted from test/suite/corpus/linebreak-manual-directly-after-automatic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hard break directly after ${linebreak()} normal break.`)
}
