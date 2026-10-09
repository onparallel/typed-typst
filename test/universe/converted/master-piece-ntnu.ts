// Converted from test/universe/corpus/master-piece-ntnu.typ by scripts/convert-suite.ts — do not edit.
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
  lorem,
  m,
  path,
  rgb,
  show,
} from '../../../src/index.ts'

export default () => {
  const masterPieceNtnu = external('master-piece-ntnu')
  const setupAppendices = external('setup-appendices')
  const makeGlossary = external('make-glossary')
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const acronyms = external('acronyms')
  const masterPieceNtnu_with = define('with')
    .named('acknowledgements', T.any, null)
    .named('alternating-margins', T.any, null)
    .named('authors', T.any, null)
    .named('cover', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('doc-city', T.any, null)
    .named('doc-date', T.any, null)
    .named('doc-extra-keywords', T.any, null)
    .named('extra-preambles', T.any, null)
    .named('faculty', T.any, null)
    .named('localized-info', T.any, null)
    .named('primary-lang', T.any, null)
    .named('style', T.any, null)
    .named('supervisors', T.any, null)
    .returns(T.any)
    .external(masterPieceNtnu)
  return doc(
    importPackage('@preview/master-piece-ntnu:0.3.0', [masterPieceNtnu, setupAppendices]),
    m.lines(
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, printGlossary, registerGlossary]),
      importFile('./acronyms.typ', [acronyms]),
      show(makeGlossary),
      inline(registerGlossary(acronyms)),
    ),
    show(
      masterPieceNtnu_with({
        primaryLang: 'no',
        localizedInfo: {
          en: {
            title: 'How to Abandon Dinosaur-Age TypeSetting Software',
            subtitle: 'A Modern Approach to Problem-Solving',
            abstract: includeFile('./content/abstract-1-en.typ'),
            keywords: ['Overfull \\hbox', 'Missing $ inserted', 'Compilation timed out'],
          },
          no: {
            title: 'Utfasing av typesettingssystemer fra dinosaurenes tid',
            subtitle: 'En moderne tilnærming til problemet',
            abstract: lorem(300),
            keywords: ['Forsvunne figurer', 'Bærekraftig formatering'],
          },
        },
        authors: [
          {
            firstName: 'John',
            lastNames: 'Doe',
            email: 'john.doe@example.com',
            userId: 'jod',
            faculty: 'Faculty of Educated Guesses',
            department: 'Department of Applied Guesswork',
          },
          { firstName: 'Jane', lastNames: 'Doe' },
        ],
        supervisors: [
          {
            firstName: 'Alice',
            lastNames: 'Smith',
            email: 'alice@example.com',
            userId: 'alice',
            faculty: 'Faculty of Impossible Expectations',
            department: 'Department of Loyal Supervision',
          },
          { firstName: 'Bob', lastNames: 'Jones', email: 'bob@example.com', externalOrg: 'Selskap AS' },
        ],
        degree: {
          code: 'MTFORMAT',
          name: 'Applied Guesswork and Formatting Adjustments',
          kind: 'Master of Unapplied Sciences',
          level: 'master',
        },
        faculty: 'Faculty of Fast Compilation Times',
        department: 'Department of Typesetting Sanity',
        cover: { enable: true, color: rgb('#8DA7CF') },
        alternatingMargins: true,
        acknowledgements: includeFile('content/acknowledgements.typ'),
        extraPreambles: [{ heading: 'Acronyms and Abbreviations', body: printGlossary(acronyms) }],
        docDate: datetime.today(),
        docCity: 'Trondheim',
        docExtraKeywords: ['master thesis'],
        style: { useArial: false, moreSansSerif: false, fancyChapters: false },
      }),
    ),
    m.lines(
      includeFile('./content/ch01-introduction.typ'),
      includeFile('./content/ch02-background.typ'),
      includeFile('./content/ch03-method.typ'),
      includeFile('./content/ch04-the-thing.typ'),
      includeFile('./content/ch05-results.typ'),
      includeFile('./content/ch06-discussion.typ'),
      includeFile('./content/ch07-conclusion.typ'),
    ),
    inline(bibliography({ title: 'References' }, path('references.yaml'))),
    m.lines(show(setupAppendices), includeFile('./content/zz-a-usage.typ'), includeFile('./content/zz-b-else.typ')),
  )
}
