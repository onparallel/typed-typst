// Converted from test/suite/corpus/length-to-unit.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, assert, cm, define, doc, float, inches, inline, mm, pt, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .pos('a', T.any)
    .pos('b', T.any)
    .returns(T.any)
    .body((p) => assert(unsafeRaw.code<any>`calc.abs(a - b) < 1e-6`))
  return doc(
    t.decl,
    inline(
      t(pt(500.934).pt(), 500.934),
      space,
      t(cm(3.3453).cm(), 3.3453),
      space,
      t(mm(4.3452).mm(), 4.3452),
      space,
      t(inches(5.345).inches(), 5.345),
      space,
      t(pt(500.333666999).pt(), 500.333666999),
      space,
      t(cm(3.523435).cm(), 3.523435),
      space,
      t(mm(4.12345678).mm(), 4.12345678),
      space,
      t(inches(5.333666999).inches(), 5.333666999),
      space,
      t(mm(4.123456789123456).mm(), 4.123456789123456),
      space,
      t(cm(254).mm(), float(2540)),
      space,
      t(cm(254).inches(), float(100)),
      space,
      t(mm(2540).cm(), float(254)),
      space,
      t(mm(2540).inches(), float(100)),
      space,
      t(inches(100).pt(), float(7200)),
      space,
      t(inches(100).cm(), float(254)),
      space,
      t(inches(100).mm(), float(2540)),
      space,
      t(unsafeRaw.code<any>`5em.abs.cm()`, float(0)),
      space,
      t(unsafeRaw.code<any>`(5em + 6in).abs.inches()`, float(6)),
    ),
  )
}
