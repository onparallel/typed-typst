// Converted from test/universe/corpus/bizu-sheet.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const cheatSheet = external('cheat-sheet')
  const card = define('card')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .named('tone', T.any, null)
    .returns(T.any)
    .external()
  const formula = define('formula').pos('arg1', T.any).named('title', T.any, null).returns(T.any).external()
  const checklist = define('checklist').pos('arg1', T.any).returns(T.any).external()
  const cheatSheet_with = define('with')
    .named('author', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(cheatSheet)
  return doc(
    importPackage('@preview/bizu-sheet:0.1.0', [cheatSheet, card, formula, checklist]),
    show(cheatSheet_with({ title: 'My Revision Sheet', subtitle: 'Quick review', author: 'Your name' })),
    m.heading(1, 'First topic'),
    inline(card({ title: 'Summary', tone: 'info' }, inline`${space}Write the key idea here.${space}`)),
    inline(
      formula({ title: 'Important formula' }, unsafeRaw.math.block`x = (-b plus.minus sqrt(b^2 - 4 a c)) / (2 a)`),
    ),
    inline(
      checklist([
        inline`Review the main definition.`,
        inline`Check the units or conditions.`,
        inline`Solve one application problem.`,
      ]),
    ),
  )
}
