// Converted from test/suite/corpus/counter-display-matching-numbering-fallback.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, counter, doc, heading, inline, label, labelled, m, metadata, set, space } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: 'A)' }),
      m.heading(1, 'Hello'),
      inline(
        labelled([metadata(null), space], label('at')),
        space,
        set(heading, { numbering: 'I)' }),
        space,
        context((ctx) => counter(heading).display(ctx, { at: label('at') })),
      ),
    ),
  )
}
