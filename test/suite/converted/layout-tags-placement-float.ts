// Converted from test/suite/corpus/layout-tags-placement-float.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { add, blocks, doc, grid, inline, left, m, place, raw, set, space, text, top } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'de' }),
      inline(
        grid(
          { columns: 2 },
          blocks(
            m.lines(
              set(text, { lang: 'be' }),
              inline`text ${place({ float: true }, add(top, left), inline(space, raw('a'), space))}`,
            ),
          ),
          inline`${space}text ${place({ float: true }, add(top, left), blocks(m.lines(set(text, { lang: 'fr' }), 'text in grid')))}
text${space}`,
          blocks(m.lines(set(text, { lang: 'es' }), 'b')),
        ),
      ),
    ),
  )
}
