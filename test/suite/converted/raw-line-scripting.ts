// Converted from test/suite/corpus/raw-line-scripting.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, raw, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    unsafeRaw.markup`#show raw: code => {
  for i in code.lines {
    test(i.count, 10)
  }

  test(code.lines.at(0).text, "import numpy as np")
  test(code.lines.at(1).text, "")
  test(code.lines.at(2).text, "def f(x):")
  test(code.lines.at(3).text, "    return x**2")
  test(code.lines.at(4).text, "")
  test(code.lines.at(5).text, "x = np.linspace(0, 10, 100)")
  test(code.lines.at(6).text, "y = f(x)")
  test(code.lines.at(7).text, "")
  test(code.lines.at(8).text, "print(x)")
  test(code.lines.at(9).text, "print(y)")
  test(code.lines.at(10, default: none), none)
}`,
    inline(
      raw(
        { block: true, lang: 'py' },
        'import numpy as np\n\ndef f(x):\n    return x**2\n\nx = np.linspace(0, 10, 100)\ny = f(x)\n\nprint(x)\nprint(y)',
      ),
    ),
  )
}
