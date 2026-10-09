// Converted from test/suite/corpus/raw-line-text-fill.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, m, page, pt, raw, red, set, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(page, { width: pt(200) }), show(raw.line, set(text, { fill: red }))),
    inline(
      raw(
        { block: true, lang: 'py' },
        'import numpy as np\n\ndef f(x):\n    return x**2\n\nx = np.linspace(0, 10, 100)\ny = f(x)\n\nprint(x)\nprint(y)',
      ),
    ),
  )
}
