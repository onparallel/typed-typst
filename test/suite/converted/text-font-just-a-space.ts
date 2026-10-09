// Converted from test/suite/corpus/text-font-just-a-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, space, text } from '../../../src/index.ts'

export default () => {
  return doc(inline`A${text({ font: 'IBM Plex Serif' }, inline(space))}B`)
}
