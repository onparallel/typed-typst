// Converted from test/suite/corpus/show-nested-scopes.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { blue, codeBlock, doc, inline, let_, set, show, space, strong, text } from '../../../src/index.ts'

export default () => {
  const [worldDecl, world] = let_('world', inline`${space}World${space}`)
  return doc(
    inline(
      codeBlock([
        worldDecl,
        show('W', strong),
        world,
        codeBlock([set(text, { fill: blue }), show((it, ctx) => codeBlock([show('o', 'Ø')], it))], world),
        world,
      ]),
    ),
  )
}
