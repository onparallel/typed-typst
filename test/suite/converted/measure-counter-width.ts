// Converted from test/suite/corpus/measure-counter-width.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, counter, define, doc, inline, let_, linebreak, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const f = define('f')
    .pos('it', T.any)
    .returns(T.any)
    .body((p) =>
      context(
        (ctx) => inline`${space}Is ${unsafeRaw.code<any>`measure(it).width`} wide: ${p['it']} ${linebreak()}${space}`,
      ),
    )
  const [cDecl, c] = let_('c', counter('c'))
  const [itDecl, it] = let_(
    'it',
    context((ctx_2) => c.display(ctx_2)),
  )
  return doc(
    f.decl,
    m.lines(cDecl, itDecl),
    inline(c.update(10000), space, f(it), space, c.update(100), space, f(it), space, c.update(1), space, f(it)),
  )
}
