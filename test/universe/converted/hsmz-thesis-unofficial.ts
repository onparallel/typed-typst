// Converted from test/universe/corpus/hsmz-thesis-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  inline,
  label,
  m,
  path,
  ref,
  show,
} from '../../../src/index.ts'

export default () => {
  const hsmzThesisUnofficial = external('hsmz-thesis-unofficial')
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const acronyms = external('acronyms')
  const appendixContent = external('appendix-content')
  const abstract = external('abstract')
  const managementSummary = external('management-summary')
  const hsmzThesisUnofficial_with = define('with')
    .named('abstract', T.any, null)
    .named('acronyms', T.any, null)
    .named('ai-declaration-option', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('citation-style', T.any, null)
    .named('company', T.any, null)
    .named('confidentiality-period', T.any, null)
    .named('degree-program', T.any, null)
    .named('faculty', T.any, null)
    .named('font', T.any, null)
    .named('language', T.any, null)
    .named('management-summary', T.any, null)
    .named('print-only-used-acronyms', T.any, null)
    .named('show-abstract', T.any, null)
    .named('show-full-bibliography', T.any, null)
    .named('show-management-summary', T.any, null)
    .named('show-restriction-notice', T.any, null)
    .named('submission-date', T.any, null)
    .named('supervisor', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(hsmzThesisUnofficial)
  return doc(
    m.lines(
      importPackage('@preview/hsmz-thesis-unofficial:0.3.0', [hsmzThesisUnofficial, acr]),
      importFile('acronyms.typ', [acronyms]),
      importFile('appendix.typ', [appendixContent]),
      importFile('summary.typ', [abstract, managementSummary]),
    ),
    show(
      hsmzThesisUnofficial_with({
        thesisType: "Master's Thesis",
        title:
          'Untersuchung der Auswirkungen von [Thema] auf [Bereich] unter besonderer Berücksichtigung von [Aspekt] in [Kontext]',
        faculty: 'Wirtschaft',
        degreeProgram: 'IT-Management',
        submissionDate: '01.01.2026',
        confidentialityPeriod: '01.01.2036',
        aiDeclarationOption: 1,
        language: 'de',
        acronyms: acronyms,
        bibliography: bibliography(path('./literature.bib')),
        appendix: appendixContent,
        managementSummary: managementSummary,
        abstract: abstract,
        author: {
          name: 'Max Mustermann',
          matriculationNumber: '12345',
          address: { street: 'Musterstraße 1', zip: '12345', city: 'Musterstadt' },
          signatureImage: image(path('./assets/sample-signature.png')),
        },
        company: 'Musterfirma',
        supervisor: 'Prof. Dr. Muster',
        font: 'Calibri',
        citationStyle: 'apa',
        printOnlyUsedAcronyms: true,
        showFullBibliography: false,
        showRestrictionNotice: true,
        showManagementSummary: false,
        showAbstract: true,
      }),
    ),
    m.heading(1, 'Einleitung'),
    inline`Eine Thesis zum Thema ${acr('IT')} an der Hochschule Mainz.`,
    m.heading(2, 'Forschungsfrage'),
    inline`Forschungsmethodik streng nach der Literatur ${ref(label('wildeForschungsmethodenWirtschaftsinformatikEmpirische2007'))}.`,
    m.heading(1, 'Theorie'),
    m.heading(1, 'Praxis'),
    m.heading(1, 'Diskussion'),
    m.heading(1, 'Zusammenfassung'),
  )
}
