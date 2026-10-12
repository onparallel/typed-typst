// Converted from test/universe/corpus/vanilla.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  align,
  blocks,
  define,
  doc,
  external,
  figure,
  footnote,
  heading,
  importPackage,
  inches,
  inline,
  left,
  link,
  lorem,
  m,
  pagebreak,
  quote,
  set,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const body = define('body')
    .pos('arg1', T.content)
    .named('first-line-indent', T.any, null)
    .named('spacing', T.any, null)
    .returns(T.any)
    .external()
  const vanilla = external('vanilla')
  const vanilla_with = define('with').named('styles', T.any, null).returns(T.any).external(vanilla)
  return doc(
    importPackage('@preview/vanilla:0.2.0', [body, vanilla]),
    show(
      vanilla_with({
        styles: {
          body: {
            font: ['Times New Roman', 'Libertinus Serif'],
            spacing: 'double',
            firstLineIndent: inches(0.5),
            justify: true,
          },
        },
      }),
    ),
    heading({ depth: 1 }, inline('HEADING 1')),
    heading({ depth: 2 }, inline('Heading 2:', ' ', lorem(20))),
    heading({ depth: 3 }, inline('Heading 3')),
    heading({ depth: 4 }, inline('Heading 4')),
    heading({ depth: 5 }, inline('Heading 5')),
    heading({ depth: 6 }, inline('Heading 6')),
    inline(lorem(50)),
    m.enum({ tight: false }, m.item([lorem(20)]), m.item([lorem(20), space, footnote(inline(lorem(20)))])),
    m.list(
      { tight: false },
      m.item([strong(inline`Bullet 1`), ':', space, lorem(50)]),
      m.item([strong(inline`Bullet 2`)]),
    ),
    inline(lorem(50), space, footnote(inline(lorem(20)))),
    inline(pagebreak()),
    inline(lorem(50)),
    inline(
      table(
        { align: left, columns: 2 },
        table.header(inline(strong(inline`Heading 1`)), inline(strong(inline`Heading 2`))),
        inline`Column 1`,
        inline`Column 2`,
        inline(lorem(10)),
        inline(lorem(20)),
      ),
    ),
    inline(lorem(50)),
    inline(
      figure(
        { caption: inline`Complaint, D.I. 35, ${sym.pilcrow} 64.` },
        blocks(m.lines(set(align, { alignment: left }), inline(lorem(50)))),
      ),
    ),
    inline(lorem(50)),
    inline(pagebreak()),
    inline(lorem(50)),
    inline(quote({ attribution: lorem(20) }, inline(space, lorem(100), space, footnote(lorem(30)), space))),
    inline(lorem(50), space, footnote(inline(link('https://google.com')))),
    inline(body({ spacing: 'single', firstLineIndent: inches(0) }, inline(space, lorem(50), space))),
    inline(lorem(50)),
  )
}
