// Converted from test/suite/corpus/list-wide-really-cannot-attach.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, list } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hello ${list({ tight: false }, inline`A`, inline`B`)} World`)
}
