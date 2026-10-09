// Converted from test/suite/corpus/link-trailing-period.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, link, m, show, symbol, underline } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show(link, underline),
      inline`${link('https://a.b.?q=%10#')}. ${linebreak()} Wa${link('http://link')} ${linebreak()} Nohttps:${symbol('/')}/link
${linebreak()} Nohttp${symbol(':')}`,
    ),
  )
}
