// Converted from test/suite/corpus/text-font-variable-custom-grad.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, m, page, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: auto }), set(text, { font: 'Roboto Flex' })),
    inline`${text({ variations: { GRAD: -200 } }, inline`Grade`)} axis ${linebreak()} Grade axis ${linebreak()}
${text({ variations: { GRAD: 150 } }, inline`Grade`)} axis`,
  )
}
