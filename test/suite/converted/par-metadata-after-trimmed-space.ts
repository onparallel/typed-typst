// Converted from test/suite/corpus/par-metadata-after-trimmed-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, metadata, par, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(par, { justify: true, linebreaks: 'simple' }),
      set(text, { hyphenate: false }),
      inline`Lorem ipsum dolor ${metadata(null)} nonumy eirmod tempor.`,
    ),
  )
}
