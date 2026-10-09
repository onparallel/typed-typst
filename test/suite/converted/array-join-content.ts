// Converted from test/suite/corpus/array-join-content.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, inline, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`${data([inline`One`, inline`Two`, inline`Three`]).join({ last: inline`${space}and${space}` }, inline`,${space}`)}.`,
  )
}
