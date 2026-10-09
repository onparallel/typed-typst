// Converted from test/suite/corpus/bidi-consecutive-embedded-rtl-runs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, par, set, space, strong, text } from '../../../src/index.ts'

export default () => {
  const [contentDecl, content_2] = let_('content', par(inline`Aגֶ${strong(inline`שֶׁ`)}םB`))
  return doc(
    m.lines(
      contentDecl,
      set(text, { font: ['Libertinus Serif', 'Noto Serif Hebrew'] }),
      inline(text({ lang: 'he' }, content_2), space, text({ lang: 'de' }, content_2)),
    ),
  )
}
