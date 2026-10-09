// Converted from test/suite/corpus/issue-8372-stretched-glyphs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  blue,
  box,
  center,
  codeBlock,
  define,
  doc,
  em,
  emoji,
  horizon,
  inline,
  m,
  page,
  red,
  set,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const b = define('b')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        box(
          { stroke: red, width: auto, height: em(1.5) },
          codeBlock(
            [set(align, { alignment: add(center, horizon) })],
            box({ stroke: blue, width: auto, height: auto }, p['body']),
          ),
        ),
      ),
    )
  return doc(
    m.lines(
      set(page, { width: auto }),
      set(text, { size: em(5) }),
      b.decl,
      inline(
        b(
          codeBlock(
            [set(text, { font: ['Noto Color Emoji CBDT Subset', 'Libertinus Serif'], fallback: false })],
            inline`A${emoji.checkmark.box}`,
          ),
        ),
        space,
        b(
          codeBlock(
            [set(text, { font: ['Noto Color Emoji', 'Libertinus Serif'], fallback: false })],
            inline`A${emoji.checkmark.box}`,
          ),
        ),
      ),
    ),
  )
}
