// Converted from test/suite/corpus/state-nested.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  block,
  codeBlock,
  context,
  define,
  doc,
  inline,
  let_,
  lorem,
  m,
  page,
  pt,
  red,
  set,
  space,
  state,
  strong,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [lsDecl, ls] = let_('ls', state('lorem', lorem(30).split(' ')))
  const loremum = define('loremum')
    .pos('count', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`context ls.get().slice(0, count).join(".").trim() + "."`,
        ls.update(unsafeRaw.code<any>`list => list.slice(count)`),
      ]),
    )
  const [fsDecl, fs] = let_('fs', state('fader', red))
  const trait = define('trait')
    .pos('title', T.any)
    .returns(T.any)
    .body((p) =>
      block(
        inline(
          space,
          context((ctx_2) =>
            text({ fill: fs.get(ctx_2) }, inline(space, strong(inline`${p['title']}:`), space, loremum(1), space)),
          ),
          space,
          fs.update(unsafeRaw.code<any>`color => color.lighten(30%)`),
          space,
        ),
      ),
    )
  return doc(
    m.lines(set(page, { width: pt(200) }), set(text, { size: pt(8) })),
    m.lines(lsDecl, loremum.decl),
    m.lines(fsDecl, trait.decl),
    inline(
      trait(inline`Boldness`),
      space,
      trait(inline`Adventure`),
      space,
      trait(inline`Fear`),
      space,
      trait(inline`Anger`),
    ),
  )
}
