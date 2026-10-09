// Converted from test/suite/corpus/show-bare-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  columns,
  define,
  doc,
  em,
  inline,
  linebreak,
  m,
  page,
  pt,
  set,
  show,
  space,
  strong,
  text,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(set(page, { height: pt(130) }), set(text, { size: em(0.7) })),
    inline(
      align(
        center,
        inline`${space}${text({ size: em(1.3) }, inline(strong(inline`Essay on typography`)))} ${linebreak()}
T. Ypst${space}`,
      ),
    ),
    m.lines(show(columns.with(2)), inline(lines(16))),
  )
}
