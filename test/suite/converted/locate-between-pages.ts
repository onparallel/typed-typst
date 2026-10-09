// Converted from test/suite/corpus/locate-between-pages.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  context,
  define,
  doc,
  inline,
  label,
  labelled,
  locate,
  m,
  metadata,
  page,
  pagebreak,
  pt,
  set,
  space,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(page, { height: pt(30) }),
      inline(
        context((ctx) =>
          blocks(
            inline(test(locate(ctx, label('a')).position(), { page: 1, x: pt(0), y: pt(0) })),
            inline(test(locate(ctx, label('b')).position(), { page: 1, x: pt(10), y: pt(10) })),
            inline(test(locate(ctx, label('c')).position(), { page: 2, x: pt(0), y: pt(0) })),
            inline(
              test(locate(ctx, label('d')).position(), { page: 2, x: pt(0), y: pt(30) }),
              space,
              test(locate(ctx, label('e')).position(), { page: 2, x: pt(0), y: pt(30) }),
            ),
          ),
        ),
      ),
    ),
    inline`${labelled([metadata(null), space], label('a'))} ${pagebreak({ weak: true })} ${labelled([metadata(null), space], label('b'))}
A ${pagebreak()} ${labelled([metadata(null), space], label('c'))} ${pagebreak({ weak: true })}
B ${pagebreak({ weak: true })} ${labelled([metadata(null), space], label('d'))} ${pagebreak({ weak: true })}
${labelled([metadata(null), space], label('e'))}`,
  )
}
