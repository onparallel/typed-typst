// Converted from test/suite/corpus/context-in-show-rule.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  counter,
  data,
  define,
  doc,
  heading,
  inline,
  label,
  labelled,
  m,
  set,
  show,
  str,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    m.lines(
      set(heading, { numbering: '1.' }),
      show(heading, (it, ctx) =>
        test(counter(heading).get(ctx), data({ intro: [1], back: [2] }).at(str(unsafeRaw.code<any>`it.label`))),
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('intro'))),
      inline(labelled(heading({ depth: 1 }, inline('Background')), label('back'))),
    ),
  )
}
