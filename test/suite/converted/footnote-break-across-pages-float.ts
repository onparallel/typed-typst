// Converted from test/suite/corpus/footnote-break-across-pages-float.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bottom,
  codeBlock,
  define,
  doc,
  footnote,
  inline,
  page,
  pct,
  place,
  pt,
  rect,
  set,
} from '../../../src/index.ts'

export default () => {
  const lines = define('lines').rest('args', T.any).returns(T.any).external()
  return doc(
    set(page, { height: pt(180) }),
    inline(lines(5)),
    inline(
      place(
        { float: true },
        bottom,
        rect({ height: pt(50), width: pct(100) }, codeBlock([footnote(lines(6, '1')), footnote(lines(2, 'I'))])),
      ),
    ),
    inline(lines(5)),
  )
}
