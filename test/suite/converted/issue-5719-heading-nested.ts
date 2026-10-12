// Converted from test/suite/corpus/issue-5719-heading-nested.typ by scripts/convert-suite.ts — do not edit.
import { doc, heading, inline } from '../../../src/index.ts'

export default () => {
  return doc(heading({ depth: 1 }, inline('= A')))
}
