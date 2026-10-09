// Converted from test/universe/corpus/versatile-apa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  datetime,
  define,
  dict,
  doc,
  document,
  external,
  figure,
  image,
  importPackage,
  includeFile,
  inline,
  lorem,
  m,
  math,
  outline,
  pagebreak,
  path,
  pt,
  raw,
  set,
  show,
  space,
  sym,
  table,
  where,
} from '../../../src/index.ts'

export default () => {
  const abstractPage = define('abstract-page').pos('arg1', T.any).returns(T.any).external()
  const appendix = external('appendix')
  const appendixOutline = define('appendix-outline').named('title', T.content, []).returns(T.any).external()
  const titlePage = define('title-page')
    .named('affiliations', T.any, null)
    .named('author-note', T.content, [])
    .named('authors', T.any, null)
    .named('course', T.content, [])
    .named('due-date', T.any, null)
    .named('instructor', T.content, [])
    .returns(T.any)
    .external()
  const apaStyle = external('apa-style')
  const orcidLink = define('orcid-link').pos('arg1', T.any).named('format', T.any, null).returns(T.any).external()
  const orcidLogo = define('orcid-logo').returns(T.any).external()
  const apaStyle_with = define('with')
    .named('font-size', T.any, null)
    .named('running-head', T.content, [])
    .returns(T.any)
    .external(apaStyle)
  return doc(
    m.lines(
      importPackage('@preview/versatile-apa:7.2.0', [
        abstractPage,
        appendix,
        appendixOutline,
        titlePage,
        { item: 'versatile-apa', as: apaStyle },
      ]),
      importPackage('@preview/orchid:0.1.0', [
        { item: 'generate-link', as: orcidLink },
        { item: 'logo-icon', as: orcidLogo },
      ]),
    ),
    set(document, {
      title: inline`American Psychological Association (APA) Style Template for Typst`,
      keywords: ['APA', 'Template', 'Typst', 'Versatile'],
      description: lorem(200),
    }),
    show(apaStyle_with({ fontSize: pt(12), runningHead: inline`APA Style Template for Typst` })),
    inline(
      titlePage({
        authors: [
          { name: inline`Author Name`, affiliations: ['ID-1', 'ID-2'] },
          { name: inline`Author Name 2` },
          { name: inline`Author Name 3`, affiliations: 'ID-4' },
          { name: inline`Author Name 4`, affiliations: ['ID-1', 'ID-3', 'ID-4'] },
        ],
        affiliations: dict({
          'ID-1': inline`Affiliation Name 1`,
          'ID-2': inline`Affiliation Name 2`,
          'ID-3': inline`Affiliation Name 3`,
          'ID-4': inline`Affiliation Name 4`,
        }),
        course: inline`Course Code: Course Name`,
        instructor: inline`Instructor Name`,
        dueDate: datetime.today().display(),
        authorNote: blocks(
          inline`Author Name${sym.space.nobreak}${orcidLogo()}${sym.space.nobreak}${orcidLink({ format: 'full' }, '0000-0000-0000-0000')}`,
          inline(lorem(50)),
        ),
      }),
    ),
    inline(abstractPage(lorem(100))),
    inline(
      outline(),
      space,
      pagebreak(),
      space,
      outline({ target: where(figure, { kind: table }), title: inline`Tables` }),
      space,
      pagebreak(),
      space,
      outline({ target: where(figure, { kind: image }), title: inline`Figures` }),
      space,
      pagebreak(),
      space,
      outline({ target: where(figure, { kind: math.equation }), title: inline`Equations` }),
      space,
      pagebreak(),
      space,
      outline({ target: where(figure, { kind: raw }), title: inline`Listings` }),
      space,
      pagebreak(),
      space,
      appendixOutline({ title: inline`Appendices` }),
      space,
      pagebreak(),
    ),
    includeFile('sections/introduction.typ'),
    inline(pagebreak(), space, includeFile('sections/lists.typ')),
    inline(pagebreak(), space, includeFile('sections/quotes.typ')),
    inline(pagebreak(), space, includeFile('sections/computer-code.typ')),
    inline(pagebreak(), space, includeFile('sections/math.typ')),
    inline(pagebreak(), space, bibliography({ full: true, title: inline`References` }, path('bibliography/ref.yml'))),
    show(appendix),
    includeFile('sections/appendix.typ'),
  )
}
