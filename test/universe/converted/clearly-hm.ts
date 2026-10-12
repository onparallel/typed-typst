// Converted from test/universe/corpus/clearly-hm.typ by scripts/convert-suite.ts — do not edit.
import { doc, inline, m, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      unsafeRaw.markup`#import "@preview/polylux:0.4.0": *`,
      unsafeRaw.markup`#import "@preview/clearly-hm:0.1.1" as hm: *`,
    ),
    show(unsafeRaw.code<any>`hm.setup.with(
  title: "The Title",
  author: "From You",
)`),
    inline(unsafeRaw.code<any>`title-slide()`),
    inline(unsafeRaw.code<any>`slide-vertical("First Page Title")[
]`),
  )
}
