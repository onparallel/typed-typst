// Converted from test/suite/corpus/terms-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blocks, doc, inline, m, par, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, (it, ctx) => unsafeRaw.code<any>`if target() != "html" { highlight(it) } else { it }`),
    inline(block(blocks(m.terms(m.term(['Hello'], ['A']), m.term(['World'], ['B']))))),
    inline(block(blocks(m.terms(m.term(['Hello'], ['A'], 'From'), m.term(['World'], ['B']))))),
    inline(block(blocks(m.terms({ tight: false }, m.term(['Hello'], ['A'], 'From', 'The'), m.term(['World'], ['B']))))),
  )
}
