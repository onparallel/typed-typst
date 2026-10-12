// Converted from test/suite/corpus/counter-heading.typ by scripts/convert-suite.ts — do not edit.
import { context, counter, doc, heading, inline, m, pt, set, show, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.a.' }),
      show(heading, set(text, { size: pt(10) })),
      inline(counter(heading).step()),
    ),
    m.lines(
      heading({ depth: 1 }, inline('Alpha')),
      inline`In ${context((ctx) => counter(heading).display(ctx))}`,
      heading({ depth: 2 }, inline('Beta')),
    ),
    m.lines(
      set(heading, { numbering: null }),
      heading({ depth: 1 }, inline('Gamma')),
      inline(heading({ numbering: 'I.' }, inline`Delta`)),
    ),
    inline`At Beta, it was ${unsafeRaw.code<any>`context {
  let it = query(heading).find(it => it.body == [Beta])
  counter(heading).display(at: it.location())
}`}`,
  )
}
