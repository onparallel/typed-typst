// Converted from test/universe/corpus/modern-iu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  define,
  doc,
  emoji,
  external,
  figure,
  importPackage,
  inline,
  lorem,
  m,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const iuquote = define('iuquote').pos('arg1', T.content).returns(T.any).external()
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgement', T.any, null)
    .named('author', T.content, [])
    .named('committee', T.any, null)
    .named('day', T.content, [])
    .named('dedication', T.content, [])
    .named('dept', T.content, [])
    .named('month', T.content, [])
    .named('title', T.content, [])
    .named('year', T.content, [])
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/modern-iu-thesis:0.1.5', [thesis, iuquote]),
    show(
      thesis_with({
        title: inline`My Thesis`,
        author: inline`My Name`,
        dept: inline`My Department`,
        year: inline`Year`,
        month: inline`Month`,
        day: inline`Day`,
        committee: [
          { name: 'Committee Member 1', title: 'Ph.D.' },
          { name: 'Committee Member 2', title: 'Ph.D.' },
          { name: 'Committee Member 3', title: 'Ph.D.' },
          { name: 'Committee Member 4', title: 'Ph.D.' },
        ],
        dedication: inline`Dedication`,
        acknowledgement: lorem(100),
        abstract: lorem(100),
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(lorem(100)),
    m.heading(2, 'History'),
    inline(lorem(100)),
    inline(align(center, inline(space, figure({ caption: inline`Kapow!` }, emoji.explosion), space))),
    inline(lorem(200)),
    inline(iuquote(inline(lorem(50)))),
    m.heading(3, 'More History'),
    inline(unsafeRaw.math.block`delta S & = delta integral cal(L) dif t = 0`),
    inline(
      align(
        center,
        inline(
          space,
          figure(
            { caption: inline`My table` },
            table(
              { columns: 3 },
              table.header(inline(), inline(strong(inline`Thing 1`)), inline(strong(inline`Thing 2`))),
              inline`Experiment 1`,
              inline`1.0`,
              inline`2.0`,
              inline`Experiment 2`,
              inline`3.0`,
              inline`4.0`,
            ),
          ),
          space,
        ),
      ),
    ),
  )
}
