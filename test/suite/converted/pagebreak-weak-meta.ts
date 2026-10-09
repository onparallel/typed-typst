// Converted from test/suite/corpus/pagebreak-weak-meta.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { counter, doc, inline, metadata, page, pagebreak } from '../../../src/index.ts'

export default () => {
  return doc(inline`First ${pagebreak({ weak: true })} ${counter(page).update(1)} ${metadata('Some')} ${pagebreak({ weak: true })}
Second`)
}
