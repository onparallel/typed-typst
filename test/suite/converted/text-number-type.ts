// Converted from test/suite/corpus/text-number-type.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { numberType: 'old-style' }),
      inline`0123456789 ${linebreak()} ${text({ numberType: auto }, inline`0123456789`)}`,
    ),
  )
}
