// Converted from test/suite/corpus/issue-1850-list-attach-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  auto,
  blocks,
  box,
  call,
  codeBlock,
  doc,
  inline,
  let_,
  list,
  m,
  page,
  parbreak,
  pt,
  set,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [partDecl, part] = let_('part', box.with({ stroke: pt(1), inset: pt(3) }))
  return doc(
    m.lines(
      set(page, { width: auto }),
      partDecl,
      inline(
        codeBlock([
          call(part, blocks(m.lines(inline(unsafeRaw.math.block`x`), m.list(m.item(['A']))))),
          call(part, add(unsafeRaw.math.block`x`, list(inline`A`))),
          call(part, add(unsafeRaw.math.block`x`, list(inline`${space}A${space}`))),
          call(part, blocks(inline(unsafeRaw.math.block`x`), m.list(m.item(['A'])))),
          call(part, add(add(unsafeRaw.math.block`x`, parbreak()), list(inline`A`))),
          call(part, add(add(add(unsafeRaw.math.block`x`, parbreak()), parbreak()), list(inline`A`))),
        ]),
      ),
    ),
  )
}
