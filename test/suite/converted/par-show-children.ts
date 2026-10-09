// Converted from test/suite/corpus/par-show-children.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  block,
  codeBlock,
  context,
  counter,
  doc,
  inline,
  let_,
  m,
  par,
  parbreak,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [pDecl, p_2] = let_('p', counter('p'))
  const [stepDecl, step] = let_('step', p_2.step())
  const [nrDecl, nr] = let_(
    'nr',
    context((ctx) => p_2.display(ctx)),
  )
  return doc(
    m.lines(
      pDecl,
      stepDecl,
      nrDecl,
      show(par, (it, ctx_2) =>
        codeBlock([
          unsafeRaw.code<any>`if it.body.at("children", default: ()).at(0, default: none) == step {
    return it
  }`,
          par(add(add(step, inline`§${nr}${space}`), it.body)),
        ]),
      ),
    ),
    m.heading(1, 'A'),
    'B',
    inline`C ${parbreak()} D`,
    inline(block(inline`E`)),
    inline(block(inline`F ${parbreak()} G`)),
  )
}
