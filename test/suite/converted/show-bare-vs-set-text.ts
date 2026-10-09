// Converted from test/suite/corpus/show-bare-vs-set-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, eastern, em, external, m, set, show, text } from '../../../src/index.ts'

export default () => {
  const forest = external('forest')
  return doc(m.lines(set(text, { fill: eastern, size: em(1.5) }), show(text.with({ fill: forest })), 'Forest'))
}
