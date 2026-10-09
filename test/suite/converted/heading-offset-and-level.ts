// Converted from test/suite/corpus/heading-offset-and-level.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, m, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.1', offset: 1 }), inline(heading({ level: 1 }, inline`Still level 1`))),
  )
}
