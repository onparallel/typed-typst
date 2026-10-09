// Converted from test/suite/corpus/smartquote-uk.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(text, { lang: 'uk' }),
      inline`"Кінь не їсть огірковий салат" — перше речення, коли-небудь вимовлене по 'телефону'.`,
    ),
  )
}
