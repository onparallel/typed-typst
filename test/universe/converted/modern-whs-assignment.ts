// Converted from test/universe/corpus/modern-whs-assignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importFile, importPackage, includeFile, m, show } from '../../../src/index.ts'

export default () => {
  const meta = external('meta')
  const acronyms = external('acronyms')
  const whsAssignment = external('whs-assignment')
  const whsAssignment_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .pos('arg7', T.any)
    .pos('arg8', T.any)
    .pos('arg9', T.any)
    .returns(T.any)
    .external(whsAssignment)
  const meta_title = external('title', meta)
  const meta_subtitle = external('subtitle', meta)
  const meta_author = external('author', meta)
  const meta_submissionDate = external('submission-date', meta)
  const meta_keywords = external('keywords', meta)
  const meta_course = external('course', meta)
  const meta_lecturer = external('lecturer', meta)
  const meta_bibliography = external('bibliography', meta)
  const acronyms_acronyms = external('acronyms', acronyms)
  return doc(
    m.lines(
      importFile('meta.typ', meta),
      importFile('acronyms.typ', acronyms),
      importPackage('@preview/modern-whs-assignment:0.4.0', [whsAssignment]),
    ),
    show(
      whsAssignment_with(
        meta_title,
        meta_subtitle,
        meta_author,
        meta_submissionDate,
        meta_keywords,
        meta_course,
        meta_lecturer,
        meta_bibliography,
        acronyms_acronyms,
      ),
    ),
    includeFile('chapters/01_introduction.typ'),
  )
}
