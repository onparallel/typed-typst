// Converted from test/suite/corpus/link-show.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, link, m, rgb, show, text, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(link, (it, ctx) => underline(text({ fill: rgb('283663') }, it))),
      inline`You could also make the ${link('https://html5zombo.com/', inline`link look way more typical.`)}`,
    ),
  )
}
