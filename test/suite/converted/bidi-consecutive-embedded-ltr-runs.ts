// Converted from test/suite/corpus/bidi-consecutive-embedded-ltr-runs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, emph, inline, let_, m, par, set, space, text } from '../../../src/index.ts'

export default () => {
  const [contentDecl, content_2] = let_('content', par(inline`أنت A${emph(inline`B`)}مطرC`))
  return doc(
    m.lines(
      contentDecl,
      set(text, { font: ['PT Sans', 'Noto Sans Arabic'] }),
      inline(text({ lang: 'ar' }, content_2), space, text({ lang: 'de' }, content_2)),
    ),
  )
}
