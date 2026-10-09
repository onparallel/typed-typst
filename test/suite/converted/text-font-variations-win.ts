// Converted from test/suite/corpus/text-font-variations-win.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'Mona Sans' }),
      inline(
        text(
          { style: 'italic' },
          inline`${space}Italic ${linebreak()} ${text({ variations: { ital: 0 } }, inline`Not italic`)}${space}`,
        ),
      ),
    ),
  )
}
