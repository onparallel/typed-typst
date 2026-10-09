// Converted from test/suite/corpus/hyphenate-outside-of-words.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { block, doc, inline, m, pt, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { hyphenate: true }),
      inline(
        block({ width: pt(0) }, "doesn't"),
        space,
        block({ width: pt(0) }, '(OneNote)'),
        space,
        block({ width: pt(0) }, '(present)'),
      ),
    ),
    m.lines(set(text, { lang: 'de' }), inline(block({ width: pt(0) }, '(bzw.)'))),
  )
}
