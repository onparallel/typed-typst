// Converted from test/suite/corpus/text-font-variable-wght.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(unsafeRaw.code<any>`for (font, tech) in (("Fraunces", "TTF"), ("Cantarell", "CFF2")) [
  #set text(font: "Fraunces")
  = #tech

  Hello, *Hello*

  #for weight in range(200, 900, step: 100, inclusive: true) [
    #text(weight: weight)[Hello.]
  ]

  #for weight in range(200, 900, step: 100, inclusive: true) [
    #text(variations: (wght: weight))[Hello.]
  ]
]`),
    ),
  )
}
