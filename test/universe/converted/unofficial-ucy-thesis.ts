// Converted from test/universe/corpus/unofficial-ucy-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
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
  const bibliographyHeading = define('bibliography-heading').returns(T.any).external()
  const guidelines = external('guidelines')
  const setupAppendices = external('setup-appendices')
  const ucyThesis = external('ucy-thesis')
  const makeGlossary = external('make-glossary')
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const acronyms = external('acronyms')
  const ucyThesis_with = define('with')
    .named('acknowledgements', T.any, null)
    .named('advisors', T.any, null)
    .named('authors', T.any, null)
    .named('glossary', T.any, null)
    .named('localized-info', T.any, null)
    .named('primary-lang', T.any, null)
    .returns(T.any)
    .external(ucyThesis)
  return doc(
    importPackage('@preview/unofficial-ucy-thesis:0.1.0', [
      bibliographyHeading,
      guidelines,
      setupAppendices,
      ucyThesis,
    ]),
    m.lines(
      importPackage('@preview/glossarium:0.5.10', [makeGlossary, printGlossary, registerGlossary]),
      importFile('acronyms.typ', [acronyms]),
      show(makeGlossary),
      inline(registerGlossary(acronyms)),
    ),
    show(
      ucyThesis_with({
        primaryLang: 'en',
        localizedInfo: {
          en: {
            diplomaProject: 'Diploma Project',
            title: 'Thesis title',
            faculty: 'Faculty of Pure and Applied Sciences',
            department: 'Department of Computer Science',
            abstract: includeFile('content/abstract-en.typ'),
            keywords: ['thesis', 'computer science', 'research', 'ucy'],
          },
          el: {
            diplomaProject: 'Ατομική Διπλωματική Εργασία',
            title: 'Τίτλος εργασίας',
            faculty: 'Σχολή Θετικών και Εφαρμοσμένων Επιστημών',
            department: 'Τμήμα Πληροφορικής',
            abstract: includeFile('content/abstract-el.typ'),
            keywords: ['διπλωματική', 'πληροφορική', 'έρευνα', 'πανεπιστήμιο κύπρου'],
          },
        },
        authors: [{ firstName: 'John', lastNames: 'Doe' }],
        advisors: [{ firstName: 'Dr Advisor', lastNames: 'Bob' }],
        acknowledgements: includeFile('content/acknowledgements.typ'),
        glossary: printGlossary(acronyms),
      }),
    ),
    m.lines(
      includeFile('content/ch01-introduction.typ'),
      includeFile('content/ch02-background.typ'),
      includeFile('content/ch03-method.typ'),
      includeFile('content/ch04-results.typ'),
      includeFile('content/ch05-discussion.typ'),
      includeFile('content/ch06-conclusions.typ'),
    ),
    inline(bibliography({ style: 'ieee', title: bibliographyHeading() }, path('references.yaml'))),
    m.lines(show(setupAppendices), includeFile('content/appendix-a.typ')),
  )
}
