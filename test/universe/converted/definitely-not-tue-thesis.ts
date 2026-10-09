// Converted from test/universe/corpus/definitely-not-tue-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  columns,
  datetime,
  define,
  doc,
  em,
  external,
  gray,
  heading,
  importFile,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  path,
  pct,
  read,
  show,
  space,
  text,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const appendix = external('appendix')
  const backmatter = external('backmatter')
  const listOfTodos = external('list-of-todos')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const makeIndex = define('make-index').named('use-page-counter', T.any, null).returns(T.any).external()
  const glossaryEntries = external('glossary-entries')
  const backrefs = external('backrefs')
  const backrefs_with = define('with')
    .named('format', T.any, null)
    .named('read', T.any, null)
    .returns(T.any)
    .external(backrefs)
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('dedication', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('draft', T.any, null)
    .named('faculty', T.any, null)
    .named('keywords', T.any, null)
    .named('location', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.content, [])
    .named('university', T.any, null)
    .named('version', T.any, null)
    .returns(T.any)
    .external(thesis)
  const [draftDecl, draft] = let_('draft', true)
  return doc(
    m.lines(
      importPackage('@preview/definitely-not-tue-thesis:0.1.0', [thesis, appendix, backmatter, listOfTodos]),
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, registerGlossary, printGlossary]),
      importPackage('@preview/in-dexter:0.7.2', [makeIndex]),
      importFile('frontback/glossary.typ', [glossaryEntries]),
      importPackage('@preview/retrofit:0.2.0', [backrefs]),
    ),
    draftDecl,
    m.lines(show(makeGlossary), inline(registerGlossary(glossaryEntries))),
    show(
      backrefs_with({
        format: unsafeRaw.code<any>`links => text(size: 0.85em, fill: gray.darken(20%))[
    (Cited on #if links.len() == 1 [page] else [pages] #links.join(", ", last: " and ").)
  ]`,
        read: (path_2) => read(unsafePath(path_2)),
      }),
    ),
    show(
      thesis_with({
        title: inline`My Thesis Title`,
        author: 'J. Smith',
        degree: 'Doctor of Philosophy',
        university: 'Eindhoven University of Technology',
        faculty: 'Mathematics and Computer Science',
        department: 'Information Systems',
        supervisors: ['prof.dr. First Supervisor', 'dr. Second Supervisor'],
        location: 'Eindhoven',
        date: datetime.today(),
        keywords: ['keyword1', 'keyword2'],
        version: 'v0.1-skeleton',
        draft: draft,
        dedication: includeFile('frontback/dedication.typ'),
        abstract: includeFile('frontback/abstract.typ'),
      }),
    ),
    m.lines(
      includeFile('chapters/01_intro.typ'),
      includeFile('chapters/02_preliminaries.typ'),
      includeFile('chapters/03_chapter_one.typ'),
      includeFile('chapters/04_chapter_two.typ'),
      includeFile('chapters/05_conclusion.typ'),
    ),
    m.lines(show(appendix), includeFile('chapters/99_appendix.typ')),
    show(backmatter),
    inline(
      heading({ level: 1 }, inline`Bibliography`),
      space,
      bibliography({ style: 'ieee', title: null }, path('refs.bib')),
    ),
    inline(heading({ level: 1 }, inline`Glossary`), space, printGlossary(glossaryEntries)),
    inline(heading({ level: 1 }, inline`Index`), space, columns(2, makeIndex({ usePageCounter: true }))),
    m.lines(
      includeFile('frontback/summary.typ'),
      includeFile('frontback/acknowledgments.typ'),
      includeFile('frontback/cv.typ'),
    ),
    inline(unsafeRaw.code<any>`if draft { list-of-todos() }`),
  )
}
