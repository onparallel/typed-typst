// Converted from test/universe/corpus/unofficial-fhict-document-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, m, show } from '../../../src/index.ts'

export default () => {
  const fhictDoc = external('fhict-doc')
  const fhictDoc_with = define('with').named('title', T.any, null).returns(T.any).external(fhictDoc)
  return doc(
    importPackage('@preview/unofficial-fhict-document-template:1.2.1', [fhictDoc]),
    show(fhictDoc_with({ title: '' })),
    m.heading(1, 'Chapter'),
  )
}
