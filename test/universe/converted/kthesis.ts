// Converted from test/universe/corpus/kthesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  dict,
  doc,
  external,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const kthThesis = external('kth-thesis')
  const setupAppendices = external('setup-appendices')
  const makeGlossary = external('make-glossary')
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const acronyms = external('acronyms')
  const kthThesis_with = define('with')
    .named('acknowledgements', T.any, null)
    .named('authors', T.any, null)
    .named('course', T.any, null)
    .named('cover-image', T.any, null)
    .named('degree', T.any, null)
    .named('doc-city', T.any, null)
    .named('doc-date', T.any, null)
    .named('doc-extra-keywords', T.any, null)
    .named('examiner', T.any, null)
    .named('extra-preambles', T.any, null)
    .named('host-company', T.any, null)
    .named('host-org', T.any, null)
    .named('localized-info', T.any, null)
    .named('national-subject-categories', T.any, null)
    .named('opponents', T.any, null)
    .named('presentation', T.any, null)
    .named('primary-lang', T.any, null)
    .named('school', T.any, null)
    .named('style', T.any, null)
    .named('supervisors', T.any, null)
    .named('trita-number', T.any, null)
    .named('with-for-diva', T.any, null)
    .returns(T.any)
    .external(kthThesis)
  return doc(
    importPackage('@preview/kthesis:0.1.8', [kthThesis, setupAppendices]),
    m.lines(
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, printGlossary, registerGlossary]),
      importFile('./acronyms.typ', [acronyms]),
      show(makeGlossary),
      inline(registerGlossary(acronyms)),
    ),
    show(
      kthThesis_with({
        primaryLang: 'en',
        localizedInfo: {
          en: {
            title: 'How to Abandon Dinosaur-Age TypeSetting Software',
            subtitle: 'A Modern Approach to Problem-Solving',
            abstract: includeFile('./content/abstract-1-en.typ'),
            keywords: ['Dogs', 'Chicken nuggets'],
          },
          sv: {
            title: 'Svenska Översättningen av Titeln',
            subtitle: 'Svenska Översättningen av Undertiteln',
            abstract: includeFile('./content/abstract-2-sv.typ'),
            keywords: ['Hundar', 'Kycklingnuggets'],
          },
          pt: dict({
            'alpha-3': 'por',
            title: 'Tradução em Português do Título',
            subtitle: 'Tradução em Português do Subtítulo',
            'abstract-heading': 'Resumo',
            'keywords-heading': 'Palavras-chave',
            abstract: includeFile('./content/abstract-3-pt.typ'),
            keywords: ['Cães', 'Nuggets de frango'],
          }),
        },
        authors: [
          {
            firstName: 'John',
            lastNames: 'Doe',
            email: 'john.doe@example.com',
            userId: 'jod',
            school: 'School of Electrical Engineering and Computer Science',
            department: 'Department of Typesetting Sanity',
          },
          { firstName: 'Jane', lastNames: 'Doe' },
        ],
        supervisors: [
          {
            firstName: 'Alice',
            lastNames: 'Smith',
            email: 'alice@example.com',
            userId: 'alice',
            school: 'School of Electrical Engineering and Computer Science',
            department: 'Department of Loyal Supervision',
          },
          { firstName: 'Bob', lastNames: 'Jones', email: 'bob@example.com', externalOrg: 'Företag AB' },
        ],
        examiner: {
          firstName: 'Charlie',
          lastNames: 'Johnson',
          email: 'charlie@example.com',
          userId: 'chj',
          school: 'School of Electrical Engineering and Computer Science',
          department: 'Department of Fair Examination',
        },
        course: { code: 'DA237X', credits: 30 },
        degree: {
          code: 'TCYSM',
          name: "Master's Program, Cybersecurity",
          subjectArea: 'Computer Science and Engineering',
          kind: 'Master of Science',
          cycle: 2,
        },
        nationalSubjectCategories: ['10201', '10206'],
        school: 'EECS',
        tritaNumber: '2026:0000',
        hostCompany: 'Företag AB',
        hostOrg: null,
        opponents: ['Mary Ignatia', 'Alexander Smith'],
        presentation: {
          language: 'en',
          slot: datetime({ year: 2026, month: 6, day: 14, hour: 13, minute: 0, second: 0 }),
          online: { service: 'Zoom', link: 'https://kth-se.zoom.us/j/111222333' },
          location: { room: 'F1 (Alfvénsalen)', address: 'Lindstedtsvägen 22', city: 'Stockholm' },
        },
        coverImage: null,
        acknowledgements: includeFile('content/acknowledgements.typ'),
        extraPreambles: [{ heading: 'Acronyms and Abbreviations', body: printGlossary(acronyms) }],
        docDate: datetime.today(),
        docCity: 'Stockholm',
        docExtraKeywords: ['master thesis'],
        withForDiva: true,
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
