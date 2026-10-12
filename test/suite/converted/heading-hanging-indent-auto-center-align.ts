// Converted from test/suite/corpus/heading-hanging-indent-auto-center-align.typ by scripts/convert-suite.ts — do not edit.
import { align, center, doc, heading, inline, m, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1.a.' }),
      show(heading, set(align, { alignment: center })),
      heading({ depth: 1 }, inline('Center aligned')),
    ),
  )
}
