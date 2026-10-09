// Converted from test/suite/corpus/string-trim-basic.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, data, define, doc, end, inline, let_, m, space, start, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const [strDecl, str_2] = let_('str', 'Typst, LaTeX, Word, InDesign')
  const [arrayDecl, array_2] = let_('array', data(['Typst', 'LaTeX', 'Word', 'InDesign']))
  return doc(
    m.lines(
      strDecl,
      arrayDecl,
      inline(
        test(str_2.split(',').map(unsafeRaw.code<any>`s => s.trim()`), array_2),
        space,
        test(data('').trim(), ''),
        space,
        test(data('  ').trim(), ''),
        space,
        test(data('\t').trim(), ''),
        space,
        test(data('\n').trim(), ''),
        space,
        test(data('\t \n').trim(), ''),
        space,
        test(data(' abc ').trim({ at: start }), 'abc '),
        space,
        test(data('\tabc ').trim({ at: start }), 'abc '),
        space,
        test(data('abc\n').trim({ at: end }), 'abc'),
        space,
        test(data(' abc ').trim({ at: end, repeat: true }), ' abc'),
        space,
        test(data('  abc').trim({ at: start, repeat: false }), 'abc'),
      ),
    ),
  )
}
