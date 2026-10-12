// Converted from test/suite/corpus/raw-extra-first-line-ws.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, inline, let_, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      let_('raw', unsafeRaw.code<any>`eval("\`\`\`   \\n\`\`\`")`)[0],
      inline(test(unsafeRaw.code<any>`raw.text`, ''), space, test(unsafeRaw.code<any>`raw.block`, true)),
    ),
  )
}
