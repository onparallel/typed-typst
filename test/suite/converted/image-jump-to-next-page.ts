// Converted from test/suite/corpus/image-jump-to-next-page.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, inline, m, page, path, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(m.lines(set(page, { height: pt(60) }), inline`Stuff ${image(path('/assets/images/rhino.png'))}`))
}
