// Converted from test/suite/corpus/text-number-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      text({ numberWidth: 'proportional' }, inline`0123456789`),
      space,
      linebreak(),
      space,
      text({ numberWidth: 'tabular' }, inline`3456789123`),
      space,
      linebreak(),
      space,
      text({ numberWidth: 'tabular' }, inline`0123456789`),
    ),
  )
}
