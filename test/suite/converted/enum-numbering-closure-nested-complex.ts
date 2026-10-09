// Converted from test/suite/corpus/enum-numbering-closure-nested-complex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, enum_, m, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { font: 'New Computer Modern' }),
      set(enum_, { numbering: unsafeRaw.code<any>`(..args) => math.mat(args.pos())`, full: true }),
      m.enum(
        m.item(m.lines('A', m.enum(m.item(['B']), m.item(m.lines('C', m.enum(m.item(['D']))))))),
        m.item(['E']),
        m.item(['F']),
      ),
    ),
  )
}
