// Converted from test/suite/corpus/image-svg-text-font.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, m, page, path, pt, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(250) }), show(image, set(text, { font: ['Roboto', 'Noto Serif CJK SC'] }))),
    inline(figure({ caption: inline`Bilingual text` }, image(path('/assets/images/chinese.svg')))),
  )
}
