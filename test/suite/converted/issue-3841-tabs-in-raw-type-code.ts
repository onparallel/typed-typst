// Converted from test/suite/corpus/issue-3841-tabs-in-raw-type-code.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw } from '../../../src/index.ts'

export default () => {
  return doc(
    inline(raw({ lang: 'typ' }, '#if true {\n\tf()\t// typ\n}')),
    inline(raw({ lang: 'typc' }, 'if true {\n\tf()\t// typc\n}')),
    inline(raw({ block: true, lang: 'typ' }, '#if true {\n\t// tabs around f()\n\tf()\t// typ\n}')),
    inline(raw({ block: true, lang: 'typc' }, 'if true {\n\t// tabs around f()\n\tf()\t// typc\n}')),
  )
}
