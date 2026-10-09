// Converted from test/universe/corpus/twilight-book.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  datetime,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  m,
  show,
  table,
} from '../../../src/index.ts'

export default () => {
  const book = external('book')
  const nestBlock = define('nest-block').pos('arg1', T.any).named('depth', T.any, null).returns(T.any).external()
  const book_with = define('with')
    .named('date', T.any, null)
    .named('depth', T.any, null)
    .named('inset', T.any, null)
    .named('preface', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.content, [])
    .named('wrapper', T.any, null)
    .returns(T.any)
    .external(book)
  return doc(
    importPackage('@preview/twilight-book:0.1.6', [book, nestBlock]),
    show(
      book_with({
        title: inline`晨昏之书`,
        theme: 'abyss',
        depth: 1,
        wrapper: (heading_2, content_2) => codeBlock([heading_2, nestBlock({ depth: 2 }, content_2)]),
        inset: em(1),
        preface: '一个多主题模板',
        date: datetime({ year: 2025, month: 11, day: 25 }),
      }),
    ),
    m.heading(1, '第一章'),
    '这是第一章的内容',
    m.heading(2, '第一节'),
    '这是第一节的内容',
    m.heading(3, '第一小节'),
    '这是第一小节的内容',
    m.heading(4, '第一子小节'),
    '这是第一子小节的内容',
    m.heading(3, '第二小节'),
    '这是第二小节的内容',
    m.heading(2, '第二节'),
    '这是第二节的内容',
    m.heading(1, '第二章'),
    '这是第二章的内容',
    inline(
      table(
        { columns: 5 },
        inline`1`,
        inline`2`,
        inline`3`,
        inline`4`,
        inline`5`,
        inline`a`,
        inline`b`,
        inline`c`,
        inline`d`,
        inline`e`,
        inline`α`,
        inline`β`,
        inline`γ`,
        inline`δ`,
        inline`ε`,
      ),
    ),
  )
}
