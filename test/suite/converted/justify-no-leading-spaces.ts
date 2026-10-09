// Converted from test/suite/corpus/justify-no-leading-spaces.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, data, doc, inline, m, mm, page, par, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { justify: true }), set(text, { size: pt(12) }), set(page, { width: mm(45), height: auto })),
    'lorem ipsum 1234, lorem ipsum dolor sit amet',
    inline(data('  leading whitespace should still be displayed')),
  )
}
