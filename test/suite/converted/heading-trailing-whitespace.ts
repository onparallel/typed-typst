// Converted from test/suite/corpus/heading-trailing-whitespace.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, heading, inline, label, labelled, m, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const join = define('join')
    .rest('xs', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`xs.pos().join()`)
  const head = define('head')
    .pos('h', T.any)
    .returns(T.any)
    .body((p) => heading({ depth: 1 }, p['h']))
  return doc(
    m.lines(join.decl, head.decl),
    inline(
      test(head(inline`h`), blocks(m.heading(1, 'h'))),
      space,
      test(head(inline`h`), blocks(m.heading(1, 'h'))),
      space,
      test(head(inline`h`), inline(labelled(heading({ depth: 1 }, inline('h')), label('a')))),
      space,
      test(head(inline`h`), inline(labelled(heading({ depth: 1 }, inline('h')), label('b')))),
    ),
    inline(
      test(join(head(inline`h`), inline(space)), blocks(m.heading(1, 'h'))),
      space,
      test(join(head(inline`h`), inline(space)), blocks(m.heading(1, 'h'))),
      space,
      test(join(head(inline`h`), inline(space)), inline(labelled(heading({ depth: 1 }, inline('h')), label('c')))),
    ),
    inline(
      test(join(head(inline`h`), inline(space), inline(space)), blocks(m.heading(1, 'h'))),
      space,
      test(
        join(head(inline`h`), inline(space), inline(space)),
        inline(labelled(heading({ depth: 1 }, inline('h')), label('d')), space),
      ),
      space,
      test(join(head(inline`h`), inline(space)), inline(labelled(heading({ depth: 1 }, inline('h')), label('e')))),
      space,
      test(join(head(inline`h`), inline(space)), inline(labelled(heading({ depth: 1 }, inline('h')), label('f')))),
    ),
    inline(
      test(
        join(head(join(inline`h`)), inline(space), inline(space)),
        inline(labelled(heading({ depth: 1 }, inline('h')), label('g'))),
      ),
    ),
  )
}
