// Converted from test/suite/corpus/raw-blocky-tab-dedent.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      unsafeRaw.markup`#let raw = eval("\`\`\`\\n\\ttest\\n  \\n \`\`\`")`,
      inline(test(unsafeRaw.code<any>`raw.text`, 'test\n '), space, test(unsafeRaw.code<any>`raw.block`, true)),
    ),
  )
}
