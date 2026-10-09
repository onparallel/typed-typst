// Converted from test/suite/corpus/hide-text.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, fr, h, hide, inline, linebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`AB ${h(fr(1))} CD ${linebreak()} ${hide(inline`A`)}B ${h(fr(1))} C${hide(inline`D`)}`)
}
