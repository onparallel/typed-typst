// Converted from test/suite/corpus/justify-justified-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`A B C ${linebreak({ justify: true })} D E F ${linebreak({ justify: true })}`)
}
