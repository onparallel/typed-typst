// Converted from test/suite/corpus/issue-1886-locate-after-metadata.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  context,
  define,
  doc,
  heading,
  inline,
  label,
  labelled,
  locate,
  m,
  metadata,
  pagebreak,
  show,
  unsafeRaw,
  where,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    show(heading, (it, ctx) =>
      codeBlock([metadata(unsafeRaw.code<any>`it.label`), pagebreak({ weak: true, to: 'odd' }), it]),
    ),
    m.lines(
      'Hi',
      inline(labelled(heading({ depth: 1 }, inline('Hello')), label('hello'))),
      inline(labelled(heading({ depth: 1 }, inline('World')), label('world'))),
    ),
    inline(
      context((ctx_2) =>
        codeBlock([
          test(locate(ctx_2, where(metadata, { value: label('hello') })).page(), 1),
          test(locate(ctx_2, label('hello')).page(), 3),
          test(locate(ctx_2, where(metadata, { value: label('world') })).page(), 3),
          test(locate(ctx_2, label('world')).page(), 5),
        ]),
      ),
    ),
  )
}
