// Converted from test/suite/corpus/show-text-regex-character-class.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { assume, box, doc, inline, lorem, m, par, pt, regex, set, show, upper } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { justify: true }),
      show(regex('\\S'), (letter, ctx) => box({ stroke: pt(1), inset: pt(2) }, assume<'content'>(upper(letter)))),
      inline(lorem(5)),
    ),
  )
}
