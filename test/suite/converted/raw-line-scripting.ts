// Converted from test/suite/corpus/raw-line-scripting.typ by scripts/convert-suite.ts — do not edit.
import { T, codeBlock, define, doc, inline, raw, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    show(raw, (code, ctx) =>
      codeBlock([
        unsafeRaw.code({ code })<any>`for i in code.lines {
    test(i.count, 10)
  }`,
        test(unsafeRaw.code({ code })<any>`code.lines.at(0).text`, 'import numpy as np'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(1).text`, ''),
        test(unsafeRaw.code({ code })<any>`code.lines.at(2).text`, 'def f(x):'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(3).text`, '    return x**2'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(4).text`, ''),
        test(unsafeRaw.code({ code })<any>`code.lines.at(5).text`, 'x = np.linspace(0, 10, 100)'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(6).text`, 'y = f(x)'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(7).text`, ''),
        test(unsafeRaw.code({ code })<any>`code.lines.at(8).text`, 'print(x)'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(9).text`, 'print(y)'),
        test(unsafeRaw.code({ code })<any>`code.lines.at(10, default: none)`, null),
      ]),
    ),
    inline(
      raw(
        { block: true, lang: 'py' },
        'import numpy as np\n\ndef f(x):\n    return x**2\n\nx = np.linspace(0, 10, 100)\ny = f(x)\n\nprint(x)\nprint(y)',
      ),
    ),
  )
}
