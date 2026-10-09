// Converted from test/suite/corpus/issue-8058-show-text-grapheme-sliced.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  blocks,
  contentBlock,
  doc,
  inline,
  let_,
  m,
  set,
  show,
  sym,
  symbol,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [emptysetDecl, emptyset] = let_('emptyset', sym.emptyset)
  const [narrowemptysettextDecl, narrowemptysettext] = let_('narrowemptysettext', add(emptyset, '︀'))
  const [narrowemptysetDecl, narrowemptyset] = let_('narrowemptyset', symbol(narrowemptysettext))
  return doc(
    set(text, { font: 'New Computer Modern Math' }),
    m.lines(emptysetDecl, narrowemptysettextDecl, narrowemptysetDecl),
    inline(
      contentBlock(
        blocks(
          m.lines(
            show(emptyset, (it, ctx) => it),
            inline`${narrowemptysettext}, ${unsafeRaw.math`narrowemptyset`}`,
          ),
        ),
      ),
    ),
    inline(
      contentBlock(
        blocks(
          m.lines(
            show('︀', (it_2, ctx_2) => it_2),
            inline`${narrowemptysettext}, ${unsafeRaw.math`narrowemptyset`}`,
          ),
        ),
      ),
    ),
  )
}
