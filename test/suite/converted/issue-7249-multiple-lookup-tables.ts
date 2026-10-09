// Converted from test/suite/corpus/issue-7249-multiple-lookup-tables.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, inline, linebreak, m, set, super_, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { font: 'Source Serif 4', size: em(1.5) }), set(super_, { typographic: true })),
    inline`A${super_(inline`test`)} ${linebreak()} A${super_(inline`test1`)} ${linebreak()} A${super_(inline`(test)`)}
${linebreak()} A${super_(inline`test\``)}`,
  )
}
