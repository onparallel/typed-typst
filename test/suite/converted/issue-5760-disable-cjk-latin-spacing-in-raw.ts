// Converted from test/suite/corpus/issue-5760-disable-cjk-latin-spacing-in-raw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, raw, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(raw({ block: true, lang: 'typ' }, '#let hi = "你好world"')),
    m.lines(
      show(raw, set(text, { cjkLatinSpacing: auto })),
      inline(raw({ block: true, lang: 'typ' }, '#let hi = "你好world"')),
    ),
  )
}
