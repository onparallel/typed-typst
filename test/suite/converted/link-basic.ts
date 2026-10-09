// Converted from test/suite/corpus/link-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, link } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(link('https://example.com/')),
    inline(link('https://typst.org/', inline`Some text text text`)),
    inline`This link appears ${link('https://google.com/', inline`in the middle of`)} a paragraph.`,
    inline`Contact ${link('mailto:hi@typst.app')} or call ${link('tel:123')} for more information.`,
  )
}
