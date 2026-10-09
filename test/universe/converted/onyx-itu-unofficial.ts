// Converted from test/universe/corpus/onyx-itu-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  page,
  pagebreak,
  path,
  set,
  show,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const academicDocument = external('academic-document')
  const readGlossaryEntries = define('read-glossary-entries').pos('arg1', T.any).returns(T.any).external()
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary')
    .pos('arg1', T.any)
    .named('show-all', T.any, null)
    .returns(T.any)
    .external()
  const academicDocument_with = define('with')
    .named('abstract', T.any, null)
    .named('adviser-columns', T.any, null)
    .named('advisers', T.any, null)
    .named('author-columns', T.any, null)
    .named('authors', T.any, null)
    .named('course-code', T.any, null)
    .named('course-name', T.any, null)
    .named('dark-mode', T.any, null)
    .named('department', T.any, null)
    .named('document-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(academicDocument)
  const [glossaryEntriesDecl, glossaryEntries] = let_(
    'glossary-entries',
    readGlossaryEntries(yaml(path('glossary.yaml'))),
  )
  return doc(
    importPackage('@preview/onyx-itu-unofficial:0.1.0', [academicDocument, readGlossaryEntries, readGlossaryEntries]),
    m.lines(
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, registerGlossary, printGlossary]),
      show(makeGlossary),
      glossaryEntriesDecl,
      inline(registerGlossary(glossaryEntries)),
    ),
    show(
      academicDocument_with({
        darkMode: false,
        department: 'Department of Computer Science',
        courseName: 'Course Name',
        courseCode: 'Course Code',
        documentType: 'Document Type',
        title: 'A Typst Template for ITU',
        authors: [
          { name: 'John Smith', email: 'josm@itu.dk' },
          { name: 'Jane Doe', email: 'jado@itu.dk' },
          { name: 'James Johnson', email: 'jajo@itu.dk' },
          { name: 'Jennifer Brown', email: 'jebr@itu.dk' },
        ],
        authorColumns: 2,
        advisers: [
          { name: 'Dr. Jane Smith', email: 'jsmi@itu.dk' },
          { name: 'Prof. John Doe', email: 'jdoe@itu.dk' },
          { name: 'Prof. Robert Wilson', email: 'rowi@itu.dk' },
        ],
        adviserColumns: 3,
        abstract: includeFile('sections/0-abstract.typ'),
      }),
    ),
    m.lines(
      includeFile('sections/1-introduction.typ'),
      includeFile('sections/2-background.typ'),
      includeFile('sections/3-analysis.typ'),
      includeFile('sections/4-discussion.typ'),
      includeFile('sections/5-conclusion.typ'),
      includeFile('sections/6-future-work.typ'),
    ),
    set(page, { header: inline() }),
    m.lines(
      inline(pagebreak({ weak: true })),
      m.heading(1, 'Glossary'),
      inline(printGlossary({ showAll: true }, glossaryEntries)),
    ),
    m.lines(
      inline(pagebreak({ weak: true })),
      m.heading(1, 'Bibliography'),
      inline(bibliography({ style: 'ieee', title: null, full: true }, path('bib.yaml'))),
    ),
  )
}
