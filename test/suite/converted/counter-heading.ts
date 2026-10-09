// Converted from test/suite/corpus/counter-heading.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, counter, doc, heading, inline, m, pt, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.a.' }),
      show(heading, set(text, { size: pt(10) })),
      inline(counter(heading).step()),
    ),
    m.lines(m.heading(1, 'Alpha'), inline`In ${context((ctx) => counter(heading).display(ctx))}`, m.heading(2, 'Beta')),
    m.lines(
      set(heading, { numbering: null }),
      m.heading(1, 'Gamma'),
      inline(heading({ numbering: 'I.' }, inline`Delta`)),
    ),
    inline`At Beta, it was ${unsafeRaw.code<any>`context {
  let it = query(heading).find(it => it.body == [Beta])
  counter(heading).display(at: it.location())
}`}`,
  )
}
