// Converted from test/suite/corpus/text-font-variable-custom-wonk.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, m, page, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: auto }), set(text, { font: 'Fraunces', size: pt(25) })),
    inline`${text({ variations: { WONK: 0 } }, inline`minimum`)} ${linebreak()} minimum ${linebreak()}
${text({ variations: { WONK: 1 } }, inline`minimum`)}`,
  )
}
