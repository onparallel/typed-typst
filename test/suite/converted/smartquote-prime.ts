// Converted from test/suite/corpus/smartquote-prime.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`A 2" nail. ${linebreak()} 'A 2" nail.' ${linebreak()} "A 2" nail."`)
}
