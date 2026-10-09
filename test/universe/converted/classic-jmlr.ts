// Converted from test/universe/corpus/classic-jmlr.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  let_,
  m,
  math,
  path,
  ref,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const jmlr = external('jmlr')
  const blindtext = external('blindtext')
  const blindmathpaper = external('blindmathpaper')
  const jmlr_with = define('with')
    .named('abstract', T.any, null)
    .named('appendix', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('keywords', T.any, null)
    .named('pubdata', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(jmlr)
  const [afflsDecl, affls] = let_('affls', {
    one: {
      department: 'Department of Statistics',
      institution: 'University of Washington',
      location: 'Seattle, WA 98195-4322',
      country: 'USA',
    },
    two: {
      department: 'Division of Computer Science',
      institution: 'University of California',
      location: 'Berkeley, CA 94720-1776',
      country: 'USA',
    },
  })
  const [authorsDecl, authors] = let_('authors', [
    { name: 'Author One', affl: 'one', email: 'one@stat.washington.edu' },
    { name: 'Author Two', affl: 'two', email: 'two@cs.berkeley.edu' },
  ])
  return doc(
    m.lines(
      importPackage('@preview/classic-jmlr:0.7.0', [jmlr]),
      importFile('/blindtext.typ', [blindtext, blindmathpaper]),
    ),
    afflsDecl,
    authorsDecl,
    show(
      jmlr_with({
        title: inline`Sample JMLR Paper`,
        authors: [authors, affls],
        abstract: blindtext,
        keywords: ['keyword one', 'keyword two', 'keyword three'],
        bibliography: bibliography(path('main.bib')),
        appendix: includeFile('appendix.typ'),
        pubdata: {
          id: '21-0000',
          editor: 'My editor',
          volume: 23,
          submittedAt: datetime({ year: 2021, month: 1, day: 1 }),
          revisedAt: datetime({ year: 2022, month: 5, day: 1 }),
          publishedAt: datetime({ year: 2022, month: 9, day: 1 }),
        },
      }),
    ),
    m.heading(1, 'Introduction'),
    inline(set(math.equation, { numbering: null }), space, blindmathpaper),
    inline`Here is a citation ${ref(label('chow68'))}.`,
    m.heading(1, 'Acknowledgments and Disclosure of Funding'),
    'All acknowledgements go at the end of the paper before appendices and references. Moreover, you are required to declare funding (financial activities supporting the submitted work) and competing interests (related financial activities outside the submitted work). More information about this disclosure can be found on the JMLR website.',
  )
}
