// Converted from test/suite/corpus/text-ligatures.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, text } from '../../../src/index.ts'

export default () => {
  return doc(inline`${text({ ligatures: false }, inline`fi Qu`)} vs fi Qu ${linebreak()} abstract vs ${text({ historicalLigatures: true }, inline`abstract`)}
${linebreak()} waltz vs ${text({ discretionaryLigatures: true }, inline`waltz`)}`)
}
