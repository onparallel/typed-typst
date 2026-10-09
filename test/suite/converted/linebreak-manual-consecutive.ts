// Converted from test/suite/corpus/linebreak-manual-consecutive.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`Two consecutive ${linebreak()} ${linebreak()} breaks and three ${linebreak()} ${linebreak()}
more.`)
}
