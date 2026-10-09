// Converted from test/suite/corpus/locate-start-of-par.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  assert,
  context,
  define,
  doc,
  footnote,
  inline,
  label,
  labelled,
  metadata,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    inline`${labelled(metadata(null), label('a'))}A${labelled(metadata(null), label('b'))}B`,
    inline(context((ctx) => assert(unsafeRaw.code<any>`locate(<a>).position().y < locate(<b>).position().y`))),
    inline`${labelled(footnote(inline`c`), label('c'))}C${labelled(footnote(inline`d`), label('d'))}D`,
    inline(
      context((ctx_2) =>
        test(unsafeRaw.code<any>`locate(<c>).position().y`, unsafeRaw.code<any>`locate(<d>).position().y`),
      ),
    ),
  )
}
