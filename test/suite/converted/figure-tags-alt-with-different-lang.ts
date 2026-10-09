// Converted from test/suite/corpus/figure-tags-alt-with-different-lang.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, figure, image, inline, m, path, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(text, { lang: 'de' }), 'Ein Paragraph.'),
    m.lines(
      set(text, { lang: 'en', region: 'uk' }),
      inline(figure(image({ alt: 'A tiger' }, path('/assets/images/tiger.jpg')))),
    ),
  )
}
