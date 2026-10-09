// Converted from test/suite/corpus/raw-theme-types.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, path, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(raw({ block: true, lang: 'typ' }, '#let hi = "Hello World"')),
    m.lines(
      set(raw, { theme: path('/assets/themes/halcyon.tmTheme') }),
      inline(raw({ block: true, lang: 'typ' }, '#let hi = "Hello World"')),
    ),
    m.lines(set(raw, { theme: auto }), inline(raw({ block: true, lang: 'typ' }, '#let hi = "Hello World"'))),
  )
}
