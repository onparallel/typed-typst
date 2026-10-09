// Converted from test/suite/corpus/smartquote-disable.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, smartquote } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`He's told some books contain questionable "example text".`,
    m.lines(set(smartquote, { enabled: false }), inline`He's told some books contain questionable "example text".`),
  )
}
