// Converted from test/universe/corpus/swec-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, external, importPackage, inline, m, set, text, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const pl = external('pl')
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', pl),
      unsafeRaw.markup`#import "@preview/swec-slides:0.1.0" as swec: *`,
    ),
    m.lines(
      set(text, { lang: 'en' }),
      unsafeRaw.markup`#show: swec-template.with(
  title: [SWEC],
  subtitle: [We beg to Differ],
  authors: (
    ("Manu Musterperson", "manu.musterperson@domain.example"),
    ("Manu Musterperson", "manu.musterperson@domain.example"),
  ),
)`,
    ),
    inline(unsafeRaw.code<any>`title-slide()`),
    inline(unsafeRaw.code<any>`slide(
  title: [Slide Title],
)[
  Some Text

  \`\`\`py
  def foo():
      pass
  \`\`\`

]`),
  )
}
