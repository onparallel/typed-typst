// Converted from test/suite/corpus/space-collapsing-stringy-linebreak.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline } from '../../../src/index.ts'

export default () => {
  return doc(inline`A${data('\n')} B`)
}
