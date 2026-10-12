// Converted from test/universe/corpus/zen-zine.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  align,
  bytes,
  center,
  codeBlock,
  define,
  doc,
  document,
  em,
  external,
  fr,
  heading,
  importPackage,
  inline,
  json,
  lorem,
  m,
  pad,
  page,
  pagebreak,
  set,
  show,
  text,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const zine8 = external('zine8')
  const zine8_with = define('with')
    .named('digital', T.any, null)
    .named('draw-border', T.any, null)
    .returns(T.any)
    .external(zine8)
  return doc(
    importPackage('@preview/zen-zine:0.5.1', [zine8]),
    m.lines(
      set(document, { author: 'Tom', title: 'Zen Zine Example' }),
      set(text, { font: 'Libertinus Serif', lang: 'en' }),
    ),
    set(page, { paper: 'us-letter' }),
    show(where(heading, { level: 1 }), (hd, ctx) =>
      codeBlock([], pad({ top: em(2) }, text({ size: em(10) }, align(center, unsafeRaw.code({ hd })<any>`hd.body`)))),
    ),
    show(
      zine8_with({
        digital: json(bytes(unsafeRaw.code<any>`sys.inputs.at("digital", default: "false")`)),
        drawBorder: true,
      }),
    ),
    heading({ depth: 1 }, inline('1')),
    inline(pagebreak()),
    heading({ depth: 1 }, inline('2')),
    inline(pagebreak()),
    m.lines(heading({ depth: 2 }, inline('3')), inline(lorem(50))),
    inline(pagebreak()),
    heading({ depth: 2 }, inline('4')),
    inline(pagebreak()),
    m.lines(heading({ depth: 1 }, inline('5')), inline`${v(fr(1))} five`),
    inline(pagebreak()),
    'six',
    inline(pagebreak()),
    m.lines(heading({ depth: 1 }, inline('7')), 'seven'),
    inline(pagebreak()),
    inline(unsafeRaw.math.block`8`),
  )
}
