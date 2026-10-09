// Converted from test/suite/corpus/repeat-empty.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, fr, inline, repeat } from '../../../src/index.ts'

export default () => {
  return doc(inline`A ${box({ width: fr(1) }, repeat(inline()))} B`)
}
