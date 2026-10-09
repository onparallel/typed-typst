// Converted from test/suite/corpus/raw-tags-basic-inline.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(inline`Some ${raw('inline raw')} text and the rust ${raw({ lang: 'rs' }, 'fn')} keyword.`)
}
