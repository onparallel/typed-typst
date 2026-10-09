// Converted from test/universe/corpus/dhbw-oderso.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  datetime,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  includeFile,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const captionWithSource = external('caption-with-source')
  const dhbwKaAdapter = external('dhbw-ka-adapter')
  const abbreviations = external('abbreviations')
  const glossary = external('glossary')
  const appendices = external('appendices')
  const dhbwKaAdapter_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstracts', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('ai-acknowledgement', T.any, null)
    .named('appendices', T.any, null)
    .named('authors', T.any, null)
    .named('company-department', T.any, null)
    .named('company-logo', T.any, null)
    .named('company-supervisor', T.any, null)
    .named('confidentiality-clause', T.any, null)
    .named('digital-only', T.any, null)
    .named('digital-submission', T.any, null)
    .named('examination', T.any, null)
    .named('glossary', T.any, null)
    .named('lang', T.any, null)
    .named('library', T.any, null)
    .named('processing-period-weeks', T.any, null)
    .named('signature-city', T.any, null)
    .named('study', T.any, null)
    .named('submission-date', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title-long', T.any, null)
    .named('title-short', T.any, null)
    .named('university-supervisor', T.any, null)
    .returns(T.any)
    .external(dhbwKaAdapter)
  return doc(
    m.lines(
      importPackage('@preview/dhbw-oderso:2.4.0', [captionWithSource, dhbwKaAdapter]),
      importFile('glossary.typ', [abbreviations, glossary]),
      importFile('appendix.typ', [appendices]),
    ),
    show(
      dhbwKaAdapter_with({
        lang: 'en',
        digitalSubmission: true,
        digitalOnly: true,
        confidentialityClause: true,
        aiAcknowledgement: [
          { tool: 'ChatGPT', usage: blocks(m.enum(m.item(['Vibed chapter 1 - 6']), m.item(['Grammer correction']))) },
        ],
        titleLong: 'Writing in Typst about a long, very scientific topic',
        titleShort: 'Writing in Typst',
        thesisType: 'Projektarbeit 1 (T3_2000)',
        examination: 'Bachelor of Science (B.Sc.)',
        study: 'Computer Science',
        authors: [
          {
            firstname: 'John',
            lastname: 'Doe',
            matriculationNumber: '0000000',
            course: 'TINF24B2',
            signature: image(path('assets/placeholder-signature.png')),
          },
          { firstname: 'Erika', lastname: 'Musterfrau', matriculationNumber: '1234567', course: 'TINF24B1' },
        ],
        signatureCity: 'Karlsruhe',
        submissionDate: datetime.today().display('[day].[month].[year]'),
        processingPeriodWeeks: 12,
        companyDepartment: 'Human Resources',
        companySupervisor: 'Max Mustermann',
        companyLogo: image(path('assets/placeholder-company-logo.svg')),
        universitySupervisor: 'Heinrich Braun',
        acknowledgements: includeFile('misc/acknowledgments.typ'),
        abstracts: [
          ['de', 'Deutsch', includeFile('misc/abstract-german.typ')],
          ['en', 'English', includeFile('misc/abstract-english.typ')],
        ],
        appendices: appendices,
        library: bibliography(path('refs.bib')),
        abbreviations: abbreviations,
        glossary: glossary,
      }),
    ),
    m.lines(
      includeFile('chapters/introduction.typ'),
      includeFile('chapters/basic_formatting.typ'),
      includeFile('chapters/advanced_elements.typ'),
      includeFile('chapters/references_citations.typ'),
      includeFile('chapters/reference_management.typ'),
      includeFile('chapters/conclusion.typ'),
    ),
  )
}
