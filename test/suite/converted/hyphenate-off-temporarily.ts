// Converted from test/suite/corpus/hyphenate-off-temporarily.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, m, page, pt, raw, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(110) }), set(text, { hyphenate: true })),
    inline`Welcome to wonderful experiences. ${linebreak()} Welcome to ${raw('wonderful')} experiences.
${linebreak()} Welcome to ${text({ hyphenate: false }, inline`wonderful`)} experiences. ${linebreak()}
Welcome to wonde${text({ hyphenate: false }, inline`rf`)}ul experiences. ${linebreak()}`,
    m.lines(
      set(text, { hyphenate: false }),
      inline`Welcome to wonderful experiences. ${linebreak()} Welcome to wo${text({ hyphenate: true }, inline`nd`)}erful
experiences. ${linebreak()}`,
    ),
  )
}
