// Converted from test/suite/corpus/issue-2650-cjk-latin-spacing-meta.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { context, doc, inline } from '../../../src/index.ts'

export default () => {
  return doc('测a试', inline`测${context((ctx) => inline`a`)}试`)
}
