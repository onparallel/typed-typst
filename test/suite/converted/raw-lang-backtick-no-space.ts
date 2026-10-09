// Converted from test/suite/corpus/raw-lang-backtick-no-space.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, let_, m, raw, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [rawDecl, raw_2] = let_('raw', raw({ block: false, lang: 'lang' }, '`test `'))
  return doc(
    m.lines(
      rawDecl,
      inline(
        test(unsafeRaw.code<any>`raw.lang`, 'lang'),
        space,
        test(unsafeRaw.code<any>`raw.text`, '`test `'),
        space,
        test(unsafeRaw.code<any>`raw.block`, false),
      ),
    ),
  )
}
