// Converted from test/suite/corpus/ref-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, heading, inline, label, labelled, m, ref, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(heading, { numbering: '1.' }),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))),
      inline`See ${ref(label('setup'))}.`,
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Setup')), label('setup'))),
      inline`As seen in ${ref(label('intro'))}, we proceed.`,
    ),
  )
}
