// Converted from test/universe/corpus/modern-hkust-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  aqua,
  bibliography,
  center,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  grid,
  horizon,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  linebreak,
  link,
  lorem,
  m,
  path,
  pct,
  pt,
  raw,
  rect,
  red,
  ref,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const legend = define('legend').pos('arg1', T.content).returns(T.any).external()
  const toprule = define('toprule').returns(T.any).external()
  const midrule = define('midrule').returns(T.any).external()
  const bottomrule = define('bottomrule').returns(T.any).external()
  const load = define('load').pos('arg1', T.any).returns(T.any).external()
  const acro = define('acro').pos('arg1', T.any).returns(T.any).external()
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgement', T.any, null)
    .named('acronym', T.any, null)
    .named('acronym-col', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bib-ref', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('draft', T.any, null)
    .named('head', T.any, null)
    .named('keywords', T.any, null)
    .named('program', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(thesis)
  return doc(
    m.lines(
      importPackage('@preview/modern-hkust-thesis:0.1.1', [thesis, legend]),
      importPackage('@preview/booktabs:0.0.4', [toprule, midrule, bottomrule]),
      importPackage('@preview/abbr:0.2.3', [load, { item: 'a', as: acro }]),
    ),
    show(
      thesis_with({
        title: inline`YOUR TITLE HERE (title Case is adjusted Automatically)`,
        author: 'YOUR NAME',
        program: 'BSBE',
        date: [2025, 12, 30],
        degree: 'Mphil',
        supervisor: 'Name A',
        coSupervisor: 'Name B',
        head: 'Name C',
        abstract: includeFile('content/ab.typ'),
        acknowledgement: includeFile('content/ac.typ'),
        appendix: includeFile('content/ap.typ'),
        keywords: ['keyword 1', 'keyword 2', 'Keyword 3'],
        bibRef: bibliography(path('content/ref.bib')),
        acronym: load('content/acro.csv'),
        acronymCol: 2,
        draft: true,
      }),
    ),
    m.heading(1, 'Introduction'),
    m.heading(2, 'Section 1'),
    m.heading(3, 'Subsection 1'),
    inline(lorem(60)),
    m.heading(3, 'Subsection 2'),
    inline(lorem(60)),
    inline(lorem(50)),
    inline(
      figure(
        { caption: inline`Here is a figure title` },
        rect(
          { width: pct(100), inset: pt(12) },
          inline`${space}width of the space you can use is 21-2.5*2=16cm${linebreak()} So you need to prepare
your image with the ${strong(inline`width less than 16cm`)} and ${strong(inline`12pt font size`)}${space}`,
        ),
      ),
    ),
    inline(lorem(50), space, footnote(inline`You can use footnote, if you need`)),
    m.heading(2, 'Section 2'),
    m.heading(3, 'Subsection 2.1'),
    inline(lorem(50)),
    inline`Here is an example for image. ${figure({ caption: inline`DK Effect` }, image(path('image/DK Effect.png')))}`,
    m.heading(3, 'Subsection 2.2'),
    inline(lorem(100)),
    inline(
      figure(
        { caption: inline`Here is the name for your table` },
        table(
          { columns: [pt(80), pt(80), pt(80)], align: add(center, horizon) },
          toprule(),
          table.header(inline`Pathway`, inline`Function`, inline`Related Genes`),
          midrule(),
          inline`data1`,
          inline`data2`,
          inline`data3`,
          inline`16.6`,
          inline`104`,
          inline`1999`,
          bottomrule(),
        ),
      ),
    ),
    inline(lorem(100), space, figure({ caption: inline`NGS for mutation`, kind: image }, rect())),
    inline(
      text(
        { fill: red.darken(pct(30)) },
        inline`Besides, you can use citation freely, just ${raw('@citekey')} you set in zotero. Then you could
get something like this ${ref(label('2011.Cell.FirstChromothripsisReport'))}, and references
list could be generated in the end of the thesis automatically. The inline citation is a link
to the reference list ${ref(label('2020.Nature.ChromosomeStructureVariation'))}.`,
      ),
    ),
    m.heading(1, 'Methods & Materials'),
    m.heading(2, 'Cells & Plasmids'),
    m.lines(
      m.heading(3, 'Subsection'),
      inline(
        lorem(80),
        space,
        figure({ caption: inline`should I change a get-month-name`, kind: image }, rect()),
        space,
        legend(inline`${space}Here is legend for this figure. You can write something here. Even more, you can add
a grid here. like this: ${linebreak()} ${grid({ columns: 2, gutter: em(1.5) }, inline(strong(inline`(A)`)), inline(lorem(20)), inline(strong(inline`(B)`)), inline(lorem(20)))}${space}`),
      ),
    ),
    m.heading(3, 'Subsection'),
    inline`${text(
      { fill: red.darken(pct(30)) },
      inline`If you need to use abbreviations, you can add a record in ${raw('content/acro.csv')} in advanced,
then type in ${raw('#acro("PDE")')} here, like ${acro('PDE')}`,
    )}. When you use this record
for the first time, the long form would be displayed, and this record would be added to the
abbreviations list above. ${acro('PDE')} is the second use, just short form. ${acro('MTOC')}
is another use.`,
    inline(
      figure(
        { caption: inline`This is another table, renumbering with chapter #` },
        table(
          { columns: [pt(80), pt(80), pt(80)], align: add(center, horizon) },
          toprule(),
          table.header(inline`head1`, inline`head2`, inline`head3`),
          midrule(),
          inline`data1`,
          inline`data2`,
          inline`data3`,
          inline`16.6`,
          inline`104`,
          inline`1999`,
          bottomrule(),
        ),
      ),
    ),
    m.lines(m.heading(3, 'Subsection 2.1.3'), inline(lorem(150))),
    inline(figure({ caption: inline`This is a test figure222`, kind: image }, rect({ fill: aqua, stroke: red }))),
    m.lines(
      m.heading(2, 'Another Section in Chapter 2'),
      inline(
        lorem(100),
        space,
        figure(
          { caption: inline`This is a test figure 444`, kind: table },
          table(
            { columns: [pt(80), pt(80), pt(80)], align: add(center, horizon) },
            toprule(),
            table.header(inline`head1`, inline`head2`, inline`head3`),
            midrule(),
            inline`data1`,
            inline`data2`,
            inline`data3`,
            inline`16.6`,
            inline`104`,
            inline`1999`,
            bottomrule(),
          ),
        ),
      ),
    ),
    m.heading(1, 'Results'),
    m.lines(m.heading(2, 'Conclusion 1'), inline(lorem(100))),
    inline(lorem(120)),
    inline`You can also use equation freely. ${link('https://typst.app/docs/reference/math/', inline`Details here.`)}
${unsafeRaw.math.block`f(t) = A e^(t/tau)`}`,
    m.heading(1, 'Discussion & Conclusion'),
    m.heading(2, 'Point 1'),
    inline(lorem(100), space, ref(label('2011.Cell.FirstChromothripsisReport'))),
    m.heading(2, 'Point 2'),
    inline(lorem(100), space, ref(label('2025.Cell.OngoingChromothtipsis'))),
  )
}
