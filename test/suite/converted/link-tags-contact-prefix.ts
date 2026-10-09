// Converted from test/suite/corpus/link-tags-contact-prefix.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, link } from '../../../src/index.ts'

export default () => {
  return doc(inline(link('mailto:hello@typst.app')), inline(link('tel:123')))
}
