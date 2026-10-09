// Converted from test/universe/corpus/aero-dhbw.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  em,
  external,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const glossaryList = external('glossary-list')
  const aeroDhbw = external('aero-dhbw')
  const codlyInit = external('codly-init')
  const codly = define('codly').named('languages', T.any, null).returns(T.any).external()
  const codlyLanguages = external('codly-languages')
  const codlyInit_with = define('with').returns(T.any).external(codlyInit)
  const aeroDhbw_with = define('with')
    .named('acronym-list', T.any, null)
    .named('author', T.any, null)
    .named('company', T.any, null)
    .named('company-location', T.any, null)
    .named('course', T.any, null)
    .named('end-date', T.any, null)
    .named('figure-gap-above', T.any, null)
    .named('figure-gap-under', T.any, null)
    .named('place-of-authorship', T.any, null)
    .named('project', T.any, null)
    .named('project-type', T.any, null)
    .named('start-date', T.any, null)
    .named('supervisor', T.any, null)
    .named('text-lang', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .named('university-logo', T.any, null)
    .named('university-supervisor', T.any, null)
    .returns(T.any)
    .external(aeroDhbw)
  const [titleDecl, title_2] = let_('title', '')
  const [authorDecl, author] = let_('author', [{ name: '', matNumber: '', courseAcronym: '' }])
  const [projectDecl, project] = let_('project', '')
  const [projectTypeDecl, projectType] = let_('project-type', '')
  const [courseDecl, course] = let_('course', '')
  const [universityDecl, university] = let_('university', '')
  const [placeOfAuthorshipDecl, placeOfAuthorship] = let_('place-of-authorship', '')
  const [supervisorDecl, supervisor] = let_('supervisor', '')
  const [universitySupervisorDecl, universitySupervisor] = let_('university-supervisor', '')
  const [companyDecl, company] = let_('company', '')
  const [companyLocationDecl, companyLocation] = let_('company-location', '')
  const [dhbw_logoDecl, dhbw_logo] = let_('dhbw_logo', image(path('resources/dhbw-logo.png')))
  return doc(
    m.lines(
      importFile('acronyms.typ', [glossaryList]),
      importPackage('@preview/aero-dhbw:0.4.2', [aeroDhbw]),
      importPackage('@preview/codly:1.3.0', [codlyInit, codly]),
      importPackage('@preview/codly-languages:0.1.10', [codlyLanguages]),
    ),
    m.lines(show(codlyInit_with()), inline(codly({ languages: codlyLanguages }))),
    m.lines(
      titleDecl,
      authorDecl,
      projectDecl,
      projectTypeDecl,
      courseDecl,
      universityDecl,
      placeOfAuthorshipDecl,
      supervisorDecl,
      universitySupervisorDecl,
      companyDecl,
      companyLocationDecl,
    ),
    dhbw_logoDecl,
    show(
      aeroDhbw_with({
        title: title_2,
        project: project,
        projectType: projectType,
        course: course,
        placeOfAuthorship: placeOfAuthorship,
        author: author,
        startDate: datetime({ year: 2025, month: 1, day: 1 }),
        endDate: datetime({ year: 2026, month: 1, day: 1 }),
        supervisor: supervisor,
        universitySupervisor: universitySupervisor,
        company: company,
        companyLocation: companyLocation,
        university: university,
        universityLogo: dhbw_logo,
        acronymList: glossaryList,
        figureGapAbove: em(0.5),
        figureGapUnder: em(0.5),
        textLang: 'en',
      }),
    ),
    includeFile('chapters/introduction.typ'),
  )
}
