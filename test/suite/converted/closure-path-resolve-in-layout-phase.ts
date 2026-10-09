// Converted from test/suite/corpus/closure-path-resolve-in-layout-phase.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { data, doc, enum_, let_, m, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [choiceDecl, choice] = let_('choice', data(['monkey.svg', 'rhino.png', 'tiger.jpg']))
  return doc(
    m.lines(
      choiceDecl,
      set(enum_, {
        numbering: unsafeRaw.code<any>`n => {
  let path = "/assets/images/" + choice.at(n - 1)
  move(dy: -0.15em, image(path, width: 1em, height: 1em))
}`,
      }),
    ),
    m.enum(m.item(['Monkey']), m.item(['Rhino']), m.item(['Tiger'])),
  )
}
