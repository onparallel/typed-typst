// Converted from test/suite/corpus/enum-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blocks, doc, inline, m, par, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, (it, ctx) => unsafeRaw.code<any>`if target() != "html" { highlight(it) } else { it }`),
    inline(block(blocks(m.enum(m.item(['Hello']), m.item(['World']))))),
    inline(block(blocks(m.enum(m.item(['Hello'], 'From'), m.item(['World']))))),
    inline(block(blocks(m.enum({ tight: false }, m.item(['Hello'], 'From', 'The'), m.item(['World']))))),
  )
}
