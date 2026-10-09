// Converted from test/suite/corpus/set-text-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, eastern, external, inline, let_, m, par, parbreak, pt, set, text } from '../../../src/index.ts'

export default () => {
  const [xDecl, x] = let_('x', inline`And the forest ${parbreak()} lay silent!`)
  const forest = external('forest')
  return doc(
    m.lines(
      set(par, { spacing: pt(4) }),
      set(text, { style: 'italic', fill: eastern }),
      xDecl,
      inline(text({ fill: forest }, x)),
    ),
  )
}
