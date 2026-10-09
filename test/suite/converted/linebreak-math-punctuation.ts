// Converted from test/suite/corpus/linebreak-math-punctuation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, linebreak, page, pt, set, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    set(page, { width: pt(85) }),
    inline`We prove ${unsafeRaw.math`1 < 2`}. ${linebreak()} We prove ${unsafeRaw.math`1 < 2`}! ${linebreak()}
We prove ${unsafeRaw.math`1 < 2`}? ${linebreak()} We prove ${unsafeRaw.math`1 < 2`}, ${linebreak()}
We prove ${unsafeRaw.math`1 < 2`}; ${linebreak()} We prove ${unsafeRaw.math`1 < 2`}: ${linebreak()}
We prove ${unsafeRaw.math`1 < 2`}- ${linebreak()} We prove ${unsafeRaw.math`1 < 2`}– ${linebreak()}
We prove ${unsafeRaw.math`1 < 2`}— ${linebreak()}`,
  )
}
