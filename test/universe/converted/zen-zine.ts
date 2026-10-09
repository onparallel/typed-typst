// Converted from test/universe/corpus/zen-zine.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
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
    unsafeRaw.markup`#show heading.where(level: 1): hd => {
  pad(top: 2em, text(10em, align(center, hd.body)))
}`,
    show(
      zine8_with({
        digital: json(bytes(unsafeRaw.code<any>`sys.inputs.at("digital", default: "false")`)),
        drawBorder: true,
      }),
    ),
    m.heading(1, '1'),
    inline(pagebreak()),
    m.heading(1, '2'),
    inline(pagebreak()),
    m.lines(m.heading(2, '3'), inline(lorem(50))),
    inline(pagebreak()),
    m.heading(2, '4'),
    inline(pagebreak()),
    m.lines(m.heading(1, '5'), inline`${v(fr(1))} five`),
    inline(pagebreak()),
    'six',
    inline(pagebreak()),
    m.lines(m.heading(1, '7'), 'seven'),
    inline(pagebreak()),
    inline(unsafeRaw.math.block`8`),
  )
}
