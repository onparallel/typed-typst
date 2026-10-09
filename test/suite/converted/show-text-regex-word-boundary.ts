// Converted from test/suite/corpus/show-text-regex-word-boundary.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, regex, show } from '../../../src/index.ts'

export default () => {
  return doc(show(regex('(?i)\\bworld\\b'), inline`🌍`), 'Treeworld, the World of worlds, is a world.')
}
