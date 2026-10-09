// Converted from test/universe/corpus/modern-mla.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const mla = external('mla')
  const mla_with = define('with')
    .named('author', T.any, null)
    .named('bibliography-file', T.any, null)
    .named('course', T.content, [])
    .named('date', T.content, [])
    .named('professor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(mla)
  return doc(
    m.lines(
      importPackage('@preview/modern-mla:0.1.0', [mla]),
      show(
        mla_with({
          title: '',
          author: { firstname: '', lastname: '' },
          professor: null,
          course: inline(),
          date: inline(),
          bibliographyFile: null,
        }),
      ),
    ),
  )
}
