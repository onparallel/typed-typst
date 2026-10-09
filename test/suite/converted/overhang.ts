// Converted from test/suite/corpus/overhang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, par, pct, pt, rect, rgb, set, space, sym, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: pt(130), margin: pt(15) }),
      set(par, { justify: true, linebreaks: 'simple' }),
      set(text, { size: pt(9) }),
      inline(
        rect(
          { inset: pt(0), fill: rgb(0, 0, 0, 0), width: pct(100) },
          inline`${space}This is a little bit of text that builds up to hang-ing hyphens and dash---es and then,
you know, some punctuation in the margin.${space}`,
        ),
      ),
    ),
    m.lines(
      set(text, { lang: 'he', font: ['PT Sans', 'Noto Serif Hebrew'] }),
      'בנייה נכונה של משפטים ארוכים דורשת ידע בשפה. אז בואו נדבר על מזג האוויר.',
    ),
  )
}
