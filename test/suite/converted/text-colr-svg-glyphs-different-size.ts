// Converted from test/suite/corpus/text-colr-svg-glyphs-different-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, pt, set, space, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { size: pt(11) }),
      inline(
        text({ font: 'Noto Color Emoji' }, '🔗⛓‍💥🖥️🔑'),
        space,
        linebreak(),
        space,
        text({ font: 'Twitter Color Emoji' }, '🔗⛓‍💥🖥️🔑'),
        space,
        linebreak(),
      ),
    ),
    m.lines(
      set(text, { size: pt(22) }),
      inline(
        text({ font: 'Noto Color Emoji' }, '🔗⛓‍💥🖥️🔑'),
        space,
        linebreak(),
        space,
        text({ font: 'Twitter Color Emoji' }, '🔗⛓‍💥🖥️🔑'),
        space,
        linebreak(),
      ),
    ),
  )
}
