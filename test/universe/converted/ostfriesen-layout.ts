// Converted from test/universe/corpus/ostfriesen-layout.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  counter,
  datetime,
  define,
  doc,
  external,
  heading,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  page,
  pagebreak,
  path,
  pt,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary')
    .pos('arg1', T.any)
    .named('disable-back-references', T.any, null)
    .returns(T.any)
    .external()
  const abbreviationsEntryList = external('abbreviations-entry-list')
  const glossaryEntryList = external('glossary-entry-list')
  const thesis_with = define('with')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('course-of-studies', T.any, null)
    .named('date', T.any, null)
    .named('document-type', T.any, null)
    .named('enable-code-highlighting', T.any, null)
    .named('faculty', T.any, null)
    .named('font-size', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('matriculation-numbers', T.any, null)
    .named('module', T.any, null)
    .named('supervisor1', T.any, null)
    .named('supervisor2', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    m.lines(
      importPackage('@preview/ostfriesen-layout:0.1.0', [thesis]),
      importPackage('@preview/glossarium:0.5.6', [makeGlossary, registerGlossary, printGlossary]),
      importFile('abbreviations.typ', [abbreviationsEntryList]),
      importFile('glossary.typ', [glossaryEntryList]),
    ),
    show(
      thesis_with({
        title: 'Sample Document Title',
        authors: ['Jane Doe', 'John Smith'],
        matriculationNumbers: ['123456', '654321'],
        documentType: 'Sample Document Type',
        faculty: 'Engineering',
        module: 'Computer Science',
        courseOfStudies: 'Applied Computer Science',
        supervisor1: 'Prof. Dr. Example Supervisor',
        supervisor2: 'Second Supervisor, M.Sc.',
        date: datetime({ year: 2025, month: 5, day: 5 }),
        abstract: inline`${space}This document demonstrates the HS Emden/Leer template for academic writing. It showcases
the various formatting features and structure of the template, including headings, figures,
tables, and citations.${space}`,
        keywords: ['Template', 'Academic', 'Thesis'],
        lang: 'de',
        enableCodeHighlighting: true,
        fontSize: pt(12),
      }),
    ),
    m.lines(set(page, { numbering: 'i' }), inline(counter(page).update(5))),
    inline(
      pagebreak({ weak: true }),
      space,
      heading({ numbering: null }, 'Abbreviations'),
      space,
      show(makeGlossary),
      space,
      registerGlossary(abbreviationsEntryList),
      space,
      printGlossary({ disableBackReferences: true }, abbreviationsEntryList),
    ),
    inline(
      pagebreak({ weak: true }),
      space,
      heading({ numbering: null }, 'Glossary'),
      space,
      show(makeGlossary),
      space,
      registerGlossary(glossaryEntryList),
      space,
      printGlossary({ disableBackReferences: true }, glossaryEntryList),
    ),
    m.lines(set(page, { numbering: '1' }), inline(counter(page).update(1))),
    m.lines(includeFile('chapters/introduction.typ'), includeFile('chapters/features.typ')),
    inline(bibliography({ style: 'harvard-cite-them-right' }, path('bibliography.bib'))),
  )
}
