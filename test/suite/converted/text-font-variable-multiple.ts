// Converted from test/suite/corpus/text-font-variable-multiple.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, linebreak, pct, space, strong, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      text(
        { font: 'Roboto Flex' },
        inline`${space}Roboto ${emph(inline`Flex`)} ${text({ variations: { GRAD: 150 } }, inline`${space}with ${text({ stretch: pct(150) }, inline`${strong(inline`Grade`)} axis`)} enabled${space}`)}${space}`,
      ),
      space,
      linebreak(),
      space,
      text(
        { font: 'Source Serif 4' },
        inline`${space}Source ${emph(inline`Serif`)} 4 ${strong(inline`Variable`)}${space}`,
      ),
    ),
  )
}
