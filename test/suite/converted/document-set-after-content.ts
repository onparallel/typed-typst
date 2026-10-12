// Converted from test/suite/corpus/document-set-after-content.typ by scripts/convert-suite.ts — do not edit.
import { doc, document, inline, set } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hello ${set(document, { title: inline`Hello` })}`)
}
