// Converted from test/universe/corpus/tapestry.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const tapestry = external('tapestry')
  const tapestry_with = define('with')
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(tapestry)
  return doc(
    importPackage('@preview/tapestry:0.0.4', [tapestry]),
    show(tapestry_with({ title: 'Title Here', year: '2024-2025' })),
  )
}
