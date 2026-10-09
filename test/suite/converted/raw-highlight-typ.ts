// Converted from test/suite/corpus/raw-highlight-typ.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        raw(
          { block: true, lang: 'typ' },
          '#set heading(numbering: "1.")\n= Chapter 1 <chap:1>\n#lorem(100)\n\n#let hi = "Hello World"\n#show heading: emph\n/ Chap: @chap:1[Chapter #hi]\n- *Chap:* ch--ap\n+ _*Chap:*_ ch~ap\n1. _Chap:_ ch---ap',
        ),
      ),
    ),
  )
}
