// Converted from test/universe/corpus/modern-whs-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  pt,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const meta = external('meta')
  const abstract = external('abstract')
  const appendix = external('appendix')
  const acronyms = external('acronyms')
  const whsThesis = external('whs-thesis')
  const whsThesis_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .pos('arg7', T.any)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .pos('arg10', T.any)
    .pos('arg11', T.any)
    .pos('arg12', T.any)
    .pos('arg13', T.any)
    .pos('arg14', T.any)
    .pos('arg15', T.any)
    .pos('arg16', T.any)
    .pos('arg17', T.any)
    .pos('arg18', T.any)
    .pos('arg19', T.any)
    .pos('arg20', T.any)
    .pos('arg21', T.any)
    .pos('arg22', T.any)
    .returns(T.any)
    .external(whsThesis)
  const meta_title = external('title', meta)
  const meta_titleSize = external('title-size', meta)
  const meta_author = external('author', meta)
  const meta_firstName = external('first-name', meta)
  const meta_lastName = external('last-name', meta)
  const meta_date = external('date', meta)
  const meta_keywords = external('keywords', meta)
  const meta_bibliography = external('bibliography', meta)
  const acronyms_acronyms = external('acronyms', acronyms)
  const meta_degree = external('degree', meta)
  const meta_placeLocation = external('place-location', meta)
  const meta_thesisType = external('thesis-type', meta)
  const meta_studyCourse = external('study-course', meta)
  const meta_department = external('department', meta)
  const meta_firstExaminer = external('first-examiner', meta)
  const meta_secondExaminer = external('second-examiner', meta)
  const meta_dateOfSubmission = external('date-of-submission', meta)
  const meta_language = external('language', meta)
  const meta_citationStyle = external('citation-style', meta)
  return doc(
    m.lines(
      importFile('meta.typ', meta),
      importPackage('@preview/modern-whs-thesis:0.5.0', [whsThesis]),
      importFile('chapters/00_abstract.typ', abstract),
      importFile('chapters/99_appendix.typ', appendix),
      importFile('acronyms.typ', acronyms),
    ),
    show(
      whsThesis_with(
        meta_title,
        meta_titleSize,
        meta_author,
        meta_firstName,
        meta_lastName,
        meta_date,
        meta_keywords,
        inline(unsafeRaw.code<any>`abstract`),
        inline(unsafeRaw.code<any>`appendix`),
        meta_bibliography,
        acronyms_acronyms,
        meta_degree,
        meta_placeLocation,
        meta_thesisType,
        meta_studyCourse,
        meta_department,
        meta_firstExaminer,
        meta_secondExaminer,
        meta_dateOfSubmission,
        meta_language,
        meta_citationStyle,
        image({ height: pt(75) }, path('images/signature.png')),
      ),
    ),
    m.lines(
      includeFile('chapters/01_introduction.typ'),
      includeFile('chapters/02_definitions.typ'),
      includeFile('chapters/03_concept.typ'),
      includeFile('chapters/04_implementation.typ'),
      includeFile('chapters/05_conclusion.typ'),
    ),
  )
}
