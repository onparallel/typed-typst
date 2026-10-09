// Converted from test/suite/corpus/text-tracking-negative.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { tracking: em(-0.01) }), 'I saw Zoe yӛsterday, on the tram.'))
}
