// Converted from test/suite/corpus/text-copy-paste-ligatures.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, m, set, text } from '../../../src/index.ts'

export default () => {
  return doc('The after fira 🏳️‍🌈!', m.lines(set(text, { lang: 'ar', font: 'Noto Sans Arabic' }), 'مرحبًا'))
}
