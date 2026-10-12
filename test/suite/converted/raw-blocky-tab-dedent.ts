// Converted from test/suite/corpus/raw-blocky-tab-dedent.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      let_('raw', unsafeRaw.code<any>`eval("\`\`\`\\n\\ttest\\n  \\n \`\`\`")`)[0],
      inline(test(unsafeRaw.code<any>`raw.text`, 'test\n '), space, test(unsafeRaw.code<any>`raw.block`, true)),
    ),
  )
}
