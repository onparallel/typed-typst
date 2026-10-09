// Converted from test/universe/corpus/definitely-not-tuw-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  data,
  datetime,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  path,
  show,
  space,
  table,
  where,
} from '../../../src/index.ts'

export default () => {
  const generalStyles = external('general-styles')
  const thesis = external('thesis')
  const flexCaptionStyles = external('flex-caption-styles')
  const tocStyles = external('toc-styles')
  const frontMatterStyles = external('front-matter-styles')
  const mainMatterStyles = external('main-matter-styles')
  const pageHeaderStyles = external('page-header-styles')
  const backMatterStyles = external('back-matter-styles')
  const appendixStyles = external('appendix-styles')
  const thesis_with = define('with')
    .named('academic-title', T.any, null)
    .named('advisor', T.any, null)
    .named('assistants', T.any, null)
    .named('author', T.any, null)
    .named('curriculum', T.any, null)
    .named('date', T.any, null)
    .named('font', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('reviewers', T.any, null)
    .named('subtitle', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/definitely-not-tuw-thesis:0.2.0', [
      generalStyles,
      thesis,
      flexCaptionStyles,
      tocStyles,
      frontMatterStyles,
      mainMatterStyles,
      pageHeaderStyles,
      backMatterStyles,
      appendixStyles,
    ]),
    show(generalStyles),
    show(
      thesis_with({
        lang: 'en',
        title: { en: 'An ode for Lord Ipsum', de: 'Eine Ode an Lord Ipsum' },
        subtitle: data({}),
        thesisType: { en: 'Diploma Thesis', de: 'Diplomarbeit' },
        academicTitle: { de: 'Diplom-Ingenieur', en: 'Diplom-Ingenieur' },
        curriculum: {
          en: 'Software Engineering & Internet Computing',
          de: 'Software Engineering & Internet Computing ',
        },
        author: { name: 'Lord Ipsus', studentNumber: 11223344 },
        advisor: { name: 'Darth Ipsus', preTitle: 'Univ.Prof.Dr.' },
        assistants: [{ name: 'Ipsinator', preTitle: 'Sir' }],
        reviewers: [],
        keywords: 'Lorem Ipsum',
        font: 'DejaVu Sans',
        date: datetime.today(),
      }),
    ),
    m.lines(show(flexCaptionStyles), show(tocStyles), show(frontMatterStyles)),
    m.lines(includeFile('content/front-matter.typ'), inline(outline())),
    m.lines(show(mainMatterStyles), show(pageHeaderStyles)),
    includeFile('content/main.typ'),
    show(backMatterStyles),
    inline(
      outline({ title: 'List of Figures', target: where(figure, { kind: image }) }),
      space,
      outline({ title: 'List of Tables', target: where(figure, { kind: table }) }),
      space,
      outline({ title: 'List of Algorithms', target: where(figure, { kind: 'algorithm' }) }),
    ),
    inline(bibliography(path('refs.bib'))),
    show(appendixStyles),
    includeFile('content/appendix.typ'),
  )
}
