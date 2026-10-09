// Converted from test/suite/corpus/par-first-line-indent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  align,
  box,
  center,
  cm,
  doc,
  heading,
  image,
  inline,
  m,
  par,
  path,
  pt,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { firstLineIndent: pt(12), spacing: pt(5), leading: pt(5) }),
      show(heading, set(text, { size: pt(10) })),
    ),
    'The first paragraph has no indent.',
    'But the second one does.',
    inline`${box(image({ height: pt(6) }, path('/assets/images/tiger.jpg')))} starts a paragraph, also
with indent.`,
    inline(align(center, image({ width: cm(1) }, path('/assets/images/rhino.png')))),
    m.lines(
      m.heading(1, 'Headings'),
      m.list(m.item(['And lists.']), m.item(['Have no indent.'], 'Except if you have another paragraph in them.')),
    ),
    m.lines(
      set(text, { lang: 'ar', font: ['Noto Sans Arabic', 'Libertinus Serif'], size: pt(8) }),
      set(par, { leading: pt(8) }),
    ),
    m.lines(m.heading(1, 'Arabic'), 'دع النص يمطر عليك'),
    'ثم يصبح النص رطبًا وقابل للطرق ويبدو المستند رائعًا.',
  )
}
