// Converted from test/suite/corpus/linebreak-link.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, link, space } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(
      link('https://example.com/(ab'),
      space,
      linebreak(),
      space,
      link('https://example.com/(ab)'),
      space,
      linebreak(),
      space,
      link('https://example.com/(paren)'),
      space,
      linebreak(),
      space,
      link('https://example.com/paren)'),
      space,
      linebreak(),
      space,
      link('https://hi.com/%%%%%%%%abcdef'),
      space,
      linebreak(),
    ),
  )
}
