// Converted from test/suite/corpus/counter-display-matching-numbering-wrong.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  context,
  counter,
  doc,
  heading,
  inline,
  label,
  labelled,
  m,
  math,
  set,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: 'A)' }),
      set(math.equation, { numbering: '1.' }),
      m.heading(1, 'Hello'),
      inline(
        labelled([unsafeRaw.math.block`1 + 2`, space], label('eq')),
        space,
        context((ctx) => counter(heading).display(ctx, { at: label('eq') })),
      ),
    ),
  )
}
