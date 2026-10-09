// Converted from test/suite/corpus/text-font-properties.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  block,
  blocks,
  contentBlock,
  doc,
  eastern,
  em,
  green,
  inline,
  m,
  pct,
  pt,
  rgb,
  set,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      text({ size: pt(20) }, inline`A`),
      space,
      text({ size: em(2) }, inline`A`),
      space,
      text({ size: add(pt(15), em(0.5)) }, inline`A`),
    ),
    inline(text(inline`Normal`)),
    inline(text({ style: 'italic' }, inline`Italic`)),
    inline(text({ weight: 'bold' }, inline`Bold`)),
    inline(text({ stretch: pct(50) }, inline`Condensed`)),
    inline(text({ font: 'IBM Plex Serif' }, inline`Serif`)),
    'Emoji: 🐪, 🌋, 🏞',
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(text, { fill: eastern }),
            inline`This is ${text({ fill: rgb('FA644B') }, inline`way more`)} colorful.`,
          ),
        ),
      ),
    ),
    inline(block({ fill: green }, blocks(m.lines(set(text, { fill: rgb('FF000080') }), 'This text is transparent.')))),
    m.lines(set(text, { font: ['PT Sans', 'Twitter Color Emoji'], fallback: false }), '2π = 𝛼 + 𝛽. ✅'),
  )
}
