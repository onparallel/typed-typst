// Converted from test/suite/corpus/par-first-line-indent-folding.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  assert,
  context,
  define,
  dict,
  doc,
  em,
  inline,
  m,
  par,
  pt,
  set,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const check = define('check')
    .pos('expected', T.any)
    .returns(T.any)
    .body((p) => context((ctx) => assert.eq(unsafeRaw.code<any>`par.first-line-indent`, p['expected'])))
  return doc(
    check.decl,
    inline(check(dict({ amount: pt(0), all: false }))),
    m.lines(set(par, { firstLineIndent: em(2) }), inline(check(dict({ amount: em(2), all: false })))),
    m.lines(set(par, { firstLineIndent: { all: true } }), inline(check(dict({ amount: em(2), all: true })))),
    m.lines(
      set(par, { firstLineIndent: em(7) }),
      inline(
        check(dict({ amount: em(7), all: true })),
        space,
        set(par, { firstLineIndent: { amount: em(1) } }),
        space,
        check(dict({ amount: em(1), all: true })),
      ),
    ),
    m.lines(set(par, { firstLineIndent: { all: false } }), inline(check(dict({ amount: em(1), all: false })))),
    m.lines(
      set(par, { firstLineIndent: { amount: em(8), all: true } }),
      inline(check(dict({ amount: em(8), all: true }))),
    ),
  )
}
