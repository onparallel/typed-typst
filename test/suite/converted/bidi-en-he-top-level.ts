// Converted from test/suite/corpus/bidi-en-he-top-level.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, par, space, text } from '../../../src/index.ts'

export default () => {
  const [contentDecl, content_2] = let_('content', par(inline`Text טֶקסט`))
  return doc(m.lines(contentDecl, inline(text({ lang: 'he' }, content_2), space, text({ lang: 'de' }, content_2))))
}
