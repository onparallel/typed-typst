// Converted from test/suite/corpus/page-marginal-style-context.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, context, doc, m, page, pt, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { numbering: '1', margin: { bottom: pt(20) } }),
      show((it, ctx) => context((ctx_2) => codeBlock([set(text, { fill: red })], it))),
      'Hi',
    ),
  )
}
