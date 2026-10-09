// Converted from test/suite/corpus/heading-hanging-indent-auto-center-align.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { align, center, doc, heading, m, set, show } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(heading, { numbering: '1.1.a.' }),
      show(heading, set(align, { alignment: center })),
      m.heading(1, 'Center aligned'),
    ),
  )
}
