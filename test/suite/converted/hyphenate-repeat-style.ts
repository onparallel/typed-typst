// Converted from test/suite/corpus/hyphenate-repeat-style.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { cm, doc, inline, m, page, red, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: cm(2) }),
      set(text, { lang: 'es' }),
      inline`Hello-${text({ fill: red }, inline`world`)}`,
    ),
  )
}
