// Converted from test/suite/corpus/list-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, blocks, doc, inline, m, par, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, (it, ctx) => unsafeRaw.code<any>`if target() != "html" { highlight(it) } else { it }`),
    inline(block(blocks(m.list(m.item(['Hello']), m.item(['World']))))),
    inline(block(blocks(m.list(m.item(['Hello'], 'From'), m.item(['World']))))),
    inline(block(blocks(m.list({ tight: false }, m.item(['Hello'], 'From', 'The'), m.item(['World']))))),
  )
}
