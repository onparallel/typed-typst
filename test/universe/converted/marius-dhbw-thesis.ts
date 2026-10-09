// Converted from test/universe/corpus/marius-dhbw-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  data,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  m,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const dhbwTemplate = define('dhbw-template')
    .pos('arg1', T.any)
    .named('acronyms', T.any, null)
    .named('appendix', T.any, null)
    .named('bibliography-content', T.any, null)
    .named('gender-notice', T.any, null)
    .named('meta', T.any, null)
    .named('nondisclosure', T.any, null)
    .returns(T.any)
    .external()
  const vglcite = external('vglcite')
  const vglcites = external('vglcites')
  const [metaDecl, meta] = let_('meta', {
    artDerArbeit: 'Bachelorarbeit',
    titelDerArbeit: 'Titel der wissenschaftlichen Arbeit',
    titelZeile1: inline`${space}Titel der wissenschaftlichen Arbeit${space}`,
    titelZeile2: inline(),
    autorDerArbeit: 'Vorname Nachname',
    anschriftZeile1: 'Straße Hausnummer',
    anschriftZeile2: 'PLZ Ort',
    abteilung: 'Abteilung',
    firma: 'Unternehmen, Ort',
    kurs: 'Kurs',
    studienrichtung: 'Digital Business Management',
    matrikelnummer: '1234567',
    studiengangsleiter: 'Name',
    wissBetreuer: 'Name',
    firmenBetreuer: 'Name',
    abgabedatum: 'TT.MM.JJJJ',
  })
  const [acronymsDecl, acronyms] = let_('acronyms', data([]))
  const [nondisclosureDecl, nondisclosure] = let_('nondisclosure', null)
  const [genderNoticeDecl, genderNotice] = let_('gender-notice', null)
  const [appendixDecl, appendix] = let_('appendix', null)
  const [referencesDecl, references] = let_(
    'references',
    bibliography({ title: null, style: 'harvard-cite-them-right' }, path('bibliography.bib')),
  )
  return doc(
    importPackage('@preview/marius-dhbw-thesis:0.1.0', [dhbwTemplate, vglcite, vglcites]),
    metaDecl,
    acronymsDecl,
    m.lines(nondisclosureDecl, genderNoticeDecl, appendixDecl),
    referencesDecl,
    show((body, ctx) =>
      dhbwTemplate(
        {
          meta: meta,
          acronyms: acronyms,
          nondisclosure: nondisclosure,
          genderNotice: genderNotice,
          appendix: appendix,
          bibliographyContent: references,
        },
        body,
      ),
    ),
    m.heading(1, 'Beispielkapitel'),
  )
}
