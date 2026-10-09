// Converted from test/universe/corpus/biz-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  blocks,
  center,
  cm,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  lorem,
  m,
  path,
  pct,
  rgb,
  show,
  space,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const authorwrap = define('authorwrap')
    .pos('arg1', T.content)
    .named('authorcaption', T.any, null)
    .named('authorimage', T.any, null)
    .returns(T.any)
    .external()
  const dropcappara = define('dropcappara')
    .pos('arg1', T.content)
    .named('firstline', T.any, null)
    .returns(T.any)
    .external()
  const infobox = define('infobox').pos('arg1', T.content).named('icon', T.any, null).returns(T.any).external()
  const report = external('report')
  const report_with = define('with')
    .named('mycolor', T.any, null)
    .named('myfeatureimage', T.any, null)
    .named('myfont', T.any, null)
    .named('mylogo', T.any, null)
    .named('myvalues', T.any, null)
    .named('publishdate', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/biz-report:0.3.1', [authorwrap, dropcappara, infobox, report]),
    show(
      report_with({
        title: 'Business Report',
        publishdate: 'November 2025',
        mylogo: image({ width: pct(25) }, path('mylogo.svg')),
        myfeatureimage: image({ height: cm(6) }, path('techimage.svg')),
        myvalues: 'VALUE1 | VALUE2 | VALUE3 | VALUE4',
        mycolor: rgb('#1300a7'),
        myfont: 'IBM Plex Sans',
      }),
    ),
    m.heading(1, 'Welcome'),
    inline(dropcappara({ firstline: 'Welcome to this report.' }, inline(lorem(50)))),
    inline(
      authorwrap(
        { authorimage: image({ height: cm(3) }, path('author.png')), authorcaption: 'The Author, CXO' },
        inline(lorem(75)),
      ),
    ),
    inline(lorem(100)),
    m.heading(3, 'Document Control'),
    inline(
      align(
        center,
        inline(
          space,
          table(
            { columns: [auto, auto, auto, auto] },
            table.header(inline`Version`, inline`Date`, inline`Authors`, inline`Changes`),
            '0.2',
            'November 2025',
            'Reviewers',
            'Formal review',
            '0.1',
            'October 2025',
            'Authors',
            'Initial draft',
          ),
          space,
        ),
      ),
    ),
    m.heading(1, 'First main chapter'),
    inline(lorem(100)),
    inline(infobox({ icon: 'warning' }, inline`Swimming when there is a thunderstorm is dangerous.`)),
    inline(lorem(100)),
    inline(
      align(
        center,
        inline(
          space,
          table(
            { columns: [auto, auto] },
            table.header(inline`Name`, inline`Purpose`),
            'Cirrus',
            'Thin, wispy high-altitude clouds made of ice crystals. Indicate fair weather but can signal an approaching warm front or storm system.',
            'Stratus',
            "Low, uniform gray clouds resembling fog that doesn't reach the ground. Often produce mist, drizzle, or light rain.",
            'Cumulus',
            'Puffy, cotton-like clouds with flat bases. Typically bring fair weather but can develop into larger storm clouds.',
            'Cumulonimbus',
            'Towering, anvil-shaped clouds producing thunderstorms, heavy rain, hail, and sometimes tornadoes. Formed by powerful vertical air currents.',
          ),
          space,
        ),
      ),
    ),
    m.heading(2, 'Sub-heading with an image'),
    inline(figure({ caption: inline`"Technology Image"` }, image({ width: pct(50) }, path('techimage.svg')))),
    m.heading(2, 'Sub-heading'),
    inline(lorem(50)),
    inline(lorem(50)),
    m.heading(2, 'Sub-heading'),
    inline(lorem(50)),
    inline(lorem(50)),
    m.heading(1, 'Chapter of infoboxes'),
    m.heading(2, 'Subhead'),
    inline(lorem(50)),
    m.heading(2, 'Subhead'),
    inline(
      infobox(
        { icon: 'laptop' },
        blocks(
          inline(strong(inline`List of problems:`)),
          m.list(m.item(['Problem 1.']), m.item(['Problem 2.']), m.item(['Problem 3.'])),
        ),
      ),
    ),
    inline(infobox({ icon: 'app-store' }, blocks(inline(strong(inline`Heading Text`)), inline(lorem(30))))),
    inline(infobox({ icon: 'shield-virus' }, blocks(inline(strong(inline`Heading Text`)), inline(lorem(30))))),
    inline(infobox({ icon: 'database' }, blocks(inline(strong(inline`Heading Text`)), inline(lorem(30))))),
  )
}
