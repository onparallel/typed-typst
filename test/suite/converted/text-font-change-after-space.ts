// Converted from test/suite/corpus/text-font-change-after-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, text } from '../../../src/index.ts'

export default () => {
  return doc(inline`Left ${text({ font: 'IBM Plex Serif' }, inline`Right`)}.`)
}
