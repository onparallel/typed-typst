// Converted from test/universe/corpus/appunti.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const notes = external('notes')
  const notes_with = define('with')
    .named('author', T.any, null)
    .named('course', T.any, null)
    .named('degree', T.any, null)
    .named('language', T.any, null)
    .returns(T.any)
    .external(notes)
  return doc(
    importPackage('@preview/appunti:0.1.0', [notes]),
    show(notes_with({ course: 'Course', degree: 'Degree', author: 'Author', language: 'en' })),
    m.heading(1, 'Chapter'),
    'Content.',
  )
}
