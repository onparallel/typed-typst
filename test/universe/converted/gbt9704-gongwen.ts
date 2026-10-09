// Converted from test/universe/corpus/gbt9704-gongwen.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const gbt9704 = external('gbt9704')
  const gbt9704_with = define('with')
    .named('redline', T.any, null)
    .named('title-indent', T.any, null)
    .returns(T.any)
    .external(gbt9704)
  return doc(
    importPackage('@preview/gbt9704-gongwen:0.2.0', [gbt9704]),
    show(gbt9704_with({ redline: true, titleIndent: true })),
  )
}
