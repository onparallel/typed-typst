// Converted from test/suite/corpus/smartquote-escape.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`The 5${"'"}11${'"'} 'quick${"'"} brown fox jumps over the ${'"'}lazy' dog${"'"}s ear.`)
}
