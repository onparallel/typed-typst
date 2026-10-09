// Converted from test/suite/corpus/query-within.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  codeBlock,
  context,
  define,
  doc,
  emph,
  figure,
  footnote,
  heading,
  inline,
  m,
  par,
  query,
  quote,
  selector,
  show,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const test = define('test').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const testSelector = define('test-selector')
    .pos('selector', T.any)
    .pos('ref', T.any)
    .returns(T.any)
    .body((p) =>
      context((ctx_3) =>
        codeBlock([], test(query(ctx_3, p['selector']).map(unsafeRaw.code<any>`e => e.body`), p['ref'])),
      ),
    )
  return doc(
    show(
      (it, ctx) => unsafeRaw.code<any>`context if target() == "bundle" {
  document("main.pdf", it)
} else {
  it
}`,
    ),
    testSelector.decl,
    m.heading(1, emph(inline`Hi ${strong(inline`there`)}`)),
    inline`What's ${strong(inline`up`)} with ${strong(inline`you?`)}`,
    inline(figure({ caption: inline`A ${strong(inline`nice`)} ${strong(inline`rect`)}` }, inline`Empty`)),
    inline(quote(footnote(inline(emph(inline`Hello`))))),
    inline(
      context((ctx_4) =>
        blocks(
          m.lines(
            unsafeRaw.markup`#let loc = here()`,
            inline`${strong(inline`Local`)} bold ${strong(inline`text`)} ${testSelector(selector(strong).within(unsafeRaw.code<any>`loc`), [inline`Local`, inline`text`])}`,
          ),
        ),
      ),
    ),
    inline(testSelector(selector(strong).within(par), [inline`up`, inline`you?`, inline`Local`, inline`text`])),
    inline(
      testSelector(selector(strong).within(selector.or(heading, emph, figure)), [
        inline`there`,
        inline`nice`,
        inline`rect`,
      ]),
    ),
    inline(testSelector(selector(strong).within(emph).within(heading), [inline`there`])),
    inline(testSelector(selector(strong).within(heading).within(emph), [inline`there`])),
    inline(testSelector(selector(strong).within(selector(heading).within(emph)), [])),
    inline(testSelector(selector.within(emph, quote), [inline`Hello`])),
  )
}
