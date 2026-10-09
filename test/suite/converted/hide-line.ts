// Converted from test/suite/corpus/hide-line.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, hide, inline, line, pct } from '../../../src/index.ts'

export default () => {
  return doc(inline`Hidden: ${hide(inline(line({ length: pct(100) })))} ${line({ length: pct(100) })}`)
}
