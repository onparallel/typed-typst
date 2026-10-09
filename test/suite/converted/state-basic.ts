// Converted from test/suite/corpus/state-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, context, define, doc, inline, let_, m, space, state, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [sDecl, s] = let_('s', state('hey', 'a'))
  const double = define('double')
    .pos('it', T.any)
    .returns(T.any)
    .body((p) => times(2, p['it']))
  return doc(
    m.lines(sDecl, double.decl),
    inline(s.update(double), space, s.update(double), space, unsafeRaw.math.block`2 + 3`, space, s.update(double)),
    inline`Is: ${context((ctx) => s.get(ctx))}, Was: ${unsafeRaw.code<any>`context {
  let it = query(math.equation).first()
  s.at(it.location())
}`}.`,
  )
}
