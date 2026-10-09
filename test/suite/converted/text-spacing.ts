// Converted from test/suite/corpus/text-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(text, { spacing: em(1) }), 'My text has spaces.'))
}
