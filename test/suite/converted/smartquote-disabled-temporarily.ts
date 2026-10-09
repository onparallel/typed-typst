// Converted from test/suite/corpus/smartquote-disabled-temporarily.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { contentBlock, doc, inline, set, smartquote, text } from '../../../src/index.ts'

export default () => {
  return doc(
    inline`"She suddenly started speaking french: ${text({ lang: 'fr', region: 'CH' }, inline`'Je suis une banane.'`)}"
Roman told me.`,
    inline`Some people's thought on this would be ${contentBlock(inline`${set(smartquote, { enabled: false })} "strange."`)}`,
  )
}
