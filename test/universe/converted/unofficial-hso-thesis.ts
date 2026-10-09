// Converted from test/universe/corpus/unofficial-hso-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importPackage,
  includeFile,
  inline,
  let_,
  m,
  path,
  read,
  show,
  sym,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const company = define('company').named('logo', T.any, null).named('name', T.any, null).returns(T.any).external()
  const faculty = external('faculty')
  const styles = external('styles')
  const supervisor = define('supervisor')
    .named('gender', T.any, null)
    .named('institution', T.any, null)
    .named('name', T.any, null)
    .returns(T.any)
    .external()
  const thesis = external('thesis')
  const thesisInfo = define('thesis-info')
    .named('ai-usage', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('bibliography-style', T.any, null)
    .named('companies', T.any, null)
    .named('copyright', T.any, null)
    .named('degree', T.any, null)
    .named('faculty', T.any, null)
    .named('glossary', T.any, null)
    .named('lang', T.any, null)
    .named('location', T.any, null)
    .named('period', T.content, [])
    .named('subtitle', T.any, null)
    .named('supervisors', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const thesisType = external('thesis-type')
  const thesisType_BACHELOR = external('BACHELOR', thesisType)
  const faculty_EMI = external('EMI', faculty)
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('appendix', T.any, null)
    .named('info', T.any, null)
    .named('style', T.any, null)
    .returns(T.any)
    .external(thesis)
  const styles_emi = external('emi', styles)
  const [infoDecl, info] = let_(
    'info',
    thesisInfo({
      lang: 'de',
      thesisType: thesisType_BACHELOR,
      title: 'Haupttitel der Bachelorthesis',
      subtitle: 'Untertitel',
      author: 'Max Mustermann',
      degree: 'Informatik',
      faculty: faculty_EMI,
      period: inline`01.01.2026 -- 30.06.2026`,
      supervisors: [
        supervisor({ name: 'Prof. Dr. Max Mustermann', institution: 'Hochschule Offenburg', gender: 'm' }),
        supervisor({ name: 'Maxi Musterfrau', institution: 'Musterfirma' }),
      ],
      companies: [company({ name: 'Musterfirma GmbH', logo: image(path('img/company_logo.png')) })],
      location: 'Offenburg',
      copyright: true,
      aiUsage: 1,
      glossary: yaml(path('glossary.yaml')),
      bibliography: read({ encoding: null }, path('Bibliography.yaml')),
      bibliographyStyle: read({ encoding: null }, path('ieee.csl')),
    }),
  )
  return doc(
    importPackage('@preview/unofficial-hso-thesis:0.1.0', [
      company,
      faculty,
      styles,
      supervisor,
      thesis,
      thesisInfo,
      thesisType,
    ]),
    includeFile('chapters/README.typ'),
    infoDecl,
    show(
      thesis_with({
        info: info,
        style: styles_emi,
        abstract: includeFile('abstract.typ'),
        appendix: includeFile('appendix.typ'),
      }),
    ),
    m.lines(
      includeFile('chapters/01_introduction.typ'),
      includeFile('chapters/02_main_chapter.typ'),
      includeFile('chapters/03_more_chapters.typ'),
      includeFile('chapters/04_summary.typ'),
    ),
  )
}
