// Converted from test/suite/corpus/par-semantic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  block,
  blocks,
  center,
  doc,
  highlight,
  inline,
  par,
  parbreak,
  place,
  pt,
  show,
  strong,
  table,
  v,
} from '../../../src/index.ts'

export default () => {
  return doc(
    show(par, highlight),
    inline`I'm a paragraph.`,
    inline(
      align(
        center,
        table(
          { columns: 3 },
          inline`A`,
          block(inline`B`),
          block(inline`C ${strong(inline`D`)}`),
          par(inline`E`),
          blocks(parbreak(), 'F'),
          blocks('G', parbreak()),
          add(parbreak(), inline`H`),
          add(inline`I`, parbreak()),
          add(add(parbreak(), inline`J`), parbreak()),
          inline`K ${v(pt(10))}`,
          inline`${v(pt(10))} L`,
          inline`${place(inline())} M`,
          blocks('N', 'O'),
          inline(par(inline`P`), par(inline`Q`)),
          inline(block(inline`R`), block(inline`S`)),
        ),
      ),
    ),
  )
}
