// Converted from test/suite/corpus/deco-tags-underline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, red, show, underline } from '../../../src/index.ts'

export default () => {
  return doc(show(underline.with({ stroke: red })), 'red underlined text red underlined text', 'red underlined text')
}
