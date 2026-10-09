// Converted from test/suite/corpus/bidi-obj.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, image, inline, m, path, pt, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'he' }),
      inline`קרנפיםRh${box(image({ height: pt(11) }, path('/assets/images/rhino.png')))}inoחיים`,
    ),
  )
}
