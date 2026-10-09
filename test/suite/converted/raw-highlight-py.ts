// Converted from test/suite/corpus/raw-highlight-py.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: auto }),
    inline(raw({ block: true, lang: 'py' }, 'import this\n\ndef hi():\n  print("Hi!")')),
  )
}
