// Converted from test/suite/corpus/space-thin-kept.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`| | U+0020 regular space ${linebreak()} | | U+2009 thin space`)
}
