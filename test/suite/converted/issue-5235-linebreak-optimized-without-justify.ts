// Converted from test/suite/corpus/issue-5235-linebreak-optimized-without-justify.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, page, par, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(207), margin: pt(15) }), set(text, { size: pt(11) })),
    m.lines(
      set(par, { linebreaks: 'simple' }),
      'Some texts feature many longer words. Those are often exceedingly challenging to break in a visually pleasing way.',
    ),
    m.lines(
      set(par, { linebreaks: 'optimized' }),
      'Some texts feature many longer words. Those are often exceedingly challenging to break in a visually pleasing way.',
    ),
  )
}
