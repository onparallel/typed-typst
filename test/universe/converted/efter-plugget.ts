// Converted from test/universe/corpus/efter-plugget.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  aqua,
  bibliography,
  call,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  grid,
  highlight,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  lorem,
  m,
  pagebreak,
  path,
  quote,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  table,
  teal,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const efterPlugget = external('efter-plugget')
  const subfigure = define('subfigure')
    .pos('arg1', T.any)
    .named('caption', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const cref = define('cref').pos('arg1', T.content).returns(T.any).external()
  const Cref = external('Cref')
  const efterPlugget_template = define('template')
    .named('authors', T.any, null)
    .named('course-code', T.any, null)
    .named('course-name', T.any, null)
    .named('lab-date', T.any, null)
    .named('lab-group', T.any, null)
    .named('lab-name', T.any, null)
    .named('lab-partners', T.any, null)
    .named('logo', T.any, null)
    .named('page-header-title', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(efterPlugget)
  const [todoDecl, todo] = let_('todo', highlight)
  return doc(
    importPackage('@preview/efter-plugget:0.1.1', efterPlugget),
    todoDecl,
    m.lines(
      importPackage('@preview/hallon:0.1.2', [subfigure]),
      unsafeRaw.markup`#import "@preview/cellpress-unofficial:0.1.0" as cellpress: toprule, midrule, bottomrule`,
      importPackage('@preview/smartaref:0.1.0', [cref, Cref]),
    ),
    show(
      efterPlugget_template.with({
        logo: image(path('inc/logo.png')),
        title: call(todo, inline`Lab 1 -- Stem Cells`),
        subtitle: call(todo, inline`An investigation into the effects of morphogens on differentiation`),
        pageHeaderTitle: call(todo, 'Lab 1'),
        courseName: call(todo, 'Course Name'),
        courseCode: call(todo, 'AA1234'),
        labName: call(todo, 'Stem cell differentiation'),
        authors: call(todo, 'Jane Rue'),
        labPartners: [call(todo, 'John Doe'), call(todo, 'Eve Smith')],
        labGroup: call(todo, 'Group 1'),
        labDate: datetime.today().display(),
      }),
    ),
    unsafeRaw.markup`#show: cellpress.style-table`,
    inline(
      quote(
        { block: true, attribution: inline`anonymous` },
        inline(space, emph(inline`"Chemistry is all around us."`), space),
      ),
    ),
    m.heading(1, 'Introduction'),
    inline(lorem(35)),
    m.heading(2, 'Purpose'),
    inline(lorem(10)),
    m.heading(2, 'Theory'),
    inline(lorem(10), space, ref(label('2020_molecular_biology_principles_of_genome_function_craig'))),
    inline(pagebreak({ weak: true })),
    m.heading(1, 'Methods'),
    inline(lorem(10)),
    inline(pagebreak({ weak: true })),
    m.heading(1, 'Results'),
    inline(lorem(10)),
    inline`As seen in ${cref(inline(ref(label('subfig-foo')), space, ref(label('subfig-bar'))))} ...`,
    inline(
      labelled(
        [
          figure(
            { gap: em(1), caption: lorem(5) },
            grid(
              { columns: 2, gutter: em(1) },
              subfigure({ caption: lorem(3), label: label('subfig-foo') }, rect({ fill: aqua })),
              subfigure({ caption: lorem(3), label: label('subfig-bar') }, rect({ fill: teal })),
            ),
          ),
          space,
        ],
        label('fig-baz'),
      ),
    ),
    inline`The results of the experiment are presented in ${ref(label('tbl-bar'))} ...`,
    inline(
      labelled(
        [
          figure(
            { caption: lorem(5) },
            table(
              { columns: 3 },
              unsafeRaw.code<any>`toprule()`,
              table.header(inline(strong(inline`foo`)), inline(strong(inline`bar`)), inline(strong(inline`baz`))),
              unsafeRaw.code<any>`midrule()`,
              inline`a`,
              inline`b`,
              inline`c`,
              inline`a`,
              inline`b`,
              inline`c`,
              inline`a`,
              inline`b`,
              inline`c`,
              unsafeRaw.code<any>`bottomrule()`,
            ),
          ),
          space,
        ],
        label('tbl-bar'),
      ),
    ),
    inline(pagebreak({ weak: true })),
    m.heading(1, 'Discussion'),
    inline(lorem(10)),
    inline(pagebreak({ weak: true })),
    inline(bibliography(path('references.bib'))),
    inline(pagebreak({ weak: true })),
  )
}
