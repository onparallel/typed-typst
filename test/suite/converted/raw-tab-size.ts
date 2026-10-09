// Converted from test/suite/corpus/raw-tab-size.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(raw, { tabSize: 8 }),
    inline(raw({ block: true, lang: 'tsv' }, 'Year\tMonth\tDay\n2000\t2\t3\n2001\t2\t1\n2002\t3\t10')),
  )
}
