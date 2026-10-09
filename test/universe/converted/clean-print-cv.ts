// Converted from test/universe/corpus/clean-print-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  path,
  show,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const cvPageSetup = external('cv-page-setup')
  const cvHeader = define('cv-header').pos('arg1', T.any).returns(T.any).external()
  const cvSummary = define('cv-summary').pos('arg1', T.any).returns(T.any).external()
  const cvExperience = define('cv-experience').pos('arg1', T.any).returns(T.any).external()
  const cvSkills = define('cv-skills').pos('arg1', T.any).returns(T.any).external()
  const cvProjects = define('cv-projects').pos('arg1', T.any).returns(T.any).external()
  const cvCertifications = define('cv-certifications').pos('arg1', T.any).returns(T.any).external()
  const cvEducation = define('cv-education').pos('arg1', T.any).returns(T.any).external()
  const cvLanguages = define('cv-languages').pos('arg1', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', yaml(path('cv-data.yaml')))
  return doc(
    importPackage('@preview/clean-print-cv:0.1.0', [
      cvPageSetup,
      cvHeader,
      cvSummary,
      cvExperience,
      cvSkills,
      cvProjects,
      cvCertifications,
      cvEducation,
      cvLanguages,
    ]),
    dataDecl,
    show(cvPageSetup),
    inline(cvHeader(unsafeRaw.code<any>`data.personal`)),
    inline(cvSummary(unsafeRaw.code<any>`data.summary`)),
    inline(cvExperience(unsafeRaw.code<any>`data.experience`)),
    inline(cvSkills(unsafeRaw.code<any>`data.skills`)),
    inline(cvProjects(unsafeRaw.code<any>`data.projects`)),
    inline(cvCertifications(unsafeRaw.code<any>`data.certifications`)),
    inline(cvEducation(unsafeRaw.code<any>`data.education`)),
    inline(cvLanguages(unsafeRaw.code<any>`data.languages`)),
  )
}
