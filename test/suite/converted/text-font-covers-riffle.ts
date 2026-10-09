// Converted from test/suite/corpus/text-font-covers-riffle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { codeBlock, doc, inline, regex, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    set(text, {
      font: [
        { name: 'Noto Color Emoji', covers: regex('[🔗⛓‍💥]') },
        { name: 'Twitter Color Emoji', covers: regex('[^🖥️]') },
        'Noto Color Emoji',
      ],
    }),
    '🔗⛓‍💥🖥️🔑',
    inline(codeBlock([text({ font: 'Noto Color Emoji' }, '🔗⛓‍💥🖥️'), text({ font: 'Twitter Color Emoji' }, '🔑')])),
    inline(text({ font: 'Twitter Color Emoji' }, '🔗⛓‍💥🖥️🔑')),
  )
}
