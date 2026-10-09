// Converted from test/suite/corpus/issue-3726-query-show-set.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  aqua,
  blue,
  context,
  doc,
  heading,
  highlight,
  inline,
  m,
  pct,
  query,
  set,
  show,
  text,
  underline,
} from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(heading, { numbering: '1.' }), show(heading, underline), m.heading(1, 'Hi')),
    m.lines(
      set(heading, { numbering: 'I.' }),
      show(heading, set(text, { fill: blue })),
      show(heading, highlight.with({ fill: aqua.lighten(pct(50)) })),
      m.heading(1, 'Bye'),
    ),
    inline(context((ctx) => query(ctx, heading).join())),
  )
}
