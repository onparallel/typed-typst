// Converted from test/universe/corpus/unofficial-fhict-document-template.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, external, heading, importPackage, inline, show } from '../../../src/index.ts'

export default () => {
  const fhictDoc = external('fhict-doc')
  const fhictDoc_with = define('with').named('title', T.any, null).returns(T.any).external(fhictDoc)
  return doc(
    importPackage('@preview/unofficial-fhict-document-template:1.2.1', [fhictDoc]),
    show(fhictDoc_with({ title: '' })),
    heading({ depth: 1 }, inline('Chapter')),
  )
}
