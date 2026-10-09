// Converted from test/universe/corpus/basic-postcard.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  block,
  define,
  doc,
  em,
  emoji,
  external,
  gradient,
  horizon,
  image,
  importPackage,
  inline,
  lorem,
  m,
  mm,
  path,
  pct,
  pt,
  read,
  rect,
  right,
  set,
  show,
  stroke,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const postcard = external('postcard')
  const postcard_with = define('with')
    .named('address-line-length', T.any, null)
    .named('address-lines', T.any, null)
    .named('address-lines-gutter', T.any, null)
    .named('address-stroke', T.any, null)
    .named('background-motif', T.any, null)
    .named('divider-dx', T.any, null)
    .named('divider-gutter', T.any, null)
    .named('divider-length', T.any, null)
    .named('divider-stroke', T.any, null)
    .named('flipped', T.any, null)
    .named('footer', T.content, [])
    .named('margin', T.any, null)
    .named('motif', T.any, null)
    .named('paper', T.any, null)
    .named('post-stamp', T.content, [])
    .returns(T.any)
    .external(postcard)
  return doc(
    importPackage('@preview/basic-postcard:1.0.0', [postcard]),
    set(block, { breakable: false }),
    m.lines(
      show(
        postcard_with({
          motif: read({ encoding: null }, path('retro-landscape.png')),
          backgroundMotif: image({ width: pct(85) }, path('triangles.png')),
          margin: pct(5),
          paper: 'a6',
          flipped: true,
          postStamp: inline(
            rect({ height: mm(30.13), width: mm(31.8) }, align(add(horizon, right), text({ size: em(5) }, emoji.mail))),
          ),
          footer: inline`Retro Landscape by GrossKahn, 2020`,
          addressLines: ['John Doe', '7 Hairy Man Road', 'Round Rock', 'Texas', '78681', 'USA'],
          addressLinesGutter: pt(1),
          addressLineLength: pct(80),
          addressStroke: stroke(unsafeRaw.code<any>`1pt + color.fuchsia.darken(50%)`),
          dividerDx: pct(60),
          dividerLength: pct(90),
          dividerStroke: stroke(unsafeRaw.code<any>`4pt + gradient.linear(..color.map.flare, angle: 90deg)`),
          dividerGutter: pct(5),
        }),
      ),
      inline(lorem(32)),
    ),
  )
}
