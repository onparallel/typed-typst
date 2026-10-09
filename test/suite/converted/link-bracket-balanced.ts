// Converted from test/suite/corpus/link-bracket-balanced.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, link, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      link('https://[::1]:8080/'),
      space,
      linebreak(),
      space,
      link('https://example.com/(paren)'),
      space,
      linebreak(),
      space,
      link('https://example.com/#(((nested)))'),
      space,
      linebreak(),
    ),
  )
}
