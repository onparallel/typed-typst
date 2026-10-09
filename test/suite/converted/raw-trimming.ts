// Converted from test/suite/corpus/raw-trimming.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, raw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`The keyword ${raw({ lang: 'rust' }, 'let')}.`,
    inline`(${raw('')}) ${linebreak()} (${raw(' untrimmed ')}) ${linebreak()} (${raw('trimmed`')}) ${linebreak()}
(${raw('trimmed ')}) ${linebreak()} (${raw('trimmed')}) ${linebreak()}`,
  )
}
