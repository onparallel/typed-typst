// Converted from test/suite/corpus/page-margin-inside-outside-override.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  add,
  align,
  center,
  codeBlock,
  doc,
  em,
  horizon,
  inline,
  lorem,
  m,
  page,
  par,
  pt,
  set,
  strong,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { height: pt(100), margin: { inside: pt(30), outside: pt(20) } }),
      set(par, { justify: true }),
      set(text, { size: pt(8) }),
    ),
    inline(
      page(
        { margin: { x: pt(20) } },
        codeBlock([
          set(align, { alignment: add(center, horizon) }),
          text({ size: pt(20) }, strong(inline`Title`)),
          v({ weak: true }, em(2)),
          text({ size: pt(15) }, inline`Author`),
        ]),
      ),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(35))),
  )
}
