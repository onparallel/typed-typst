// Converted from test/universe/corpus/sns-polylux-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  codeBlock,
  define,
  doc,
  em,
  emph,
  external,
  fr,
  grid,
  image,
  importPackage,
  inline,
  left,
  linebreak,
  link,
  m,
  path,
  pt,
  right,
  set,
  show,
  space,
  sym,
  text,
  unsafeRaw,
  white,
} from '../../../src/index.ts'

export default () => {
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('new-sec', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const snsPolyluxTemplate = external('sns-polylux-template')
  const titleSlide = define('title-slide').returns(T.any).external()
  const tocSlide = define('toc-slide').named('title', T.content, []).returns(T.any).external()
  const newSectionSlide = define('new-section-slide').pos('arg1', T.content).returns(T.any).external()
  const focusSlide = define('focus-slide')
    .pos('arg1', T.content)
    .named('new-sec', T.content, [])
    .returns(T.any)
    .external()
  const emptySlide = define('empty-slide').pos('arg1', T.content).returns(T.any).external()
  const snsPolyluxTemplate_with = define('with')
    .named('aspect-ratio', T.any, null)
    .named('authors', T.any, null)
    .named('event', T.content, [])
    .named('logo-1', T.any, null)
    .named('logo-2', T.any, null)
    .named('short-event', T.content, [])
    .named('short-title', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(snsPolyluxTemplate)
  const grechina = define('grechina')
    .pos('w', T.any)
    .pos('h', T.any)
    .pos('s', T.any)
    .named('c', T.any, white)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let dx = s * w.pt() / calc.sqrt( w.pt()*w.pt() + h.pt()*h.pt() );
  let dy = s * h.pt() / calc.sqrt( w.pt()*w.pt() + h.pt()*h.pt() );
  curve(
    stroke: c + 0.5pt,
    fill: c,
    curve.quad(relative: true, (w/2, h/2), (w, 0pt)),
    curve.quad(relative: true, (w/2, -h/2), (w, 0pt)),
    curve.line(relative: true, (-dx, -dy)),
    curve.quad(relative: true, (-w/2, -h/2), (-w, 0pt)),
    curve.quad(relative: true, (-w/2, h/2), (-w, 0pt)),
    curve.line(relative: true, (dx, dy)),
    //curve.close()
  )
}`,
    )
  return doc(
    m.lines(
      importPackage('@preview/polylux:0.4.0', [slide]),
      importPackage('@preview/sns-polylux-template:0.2.1', [
        snsPolyluxTemplate,
        titleSlide,
        tocSlide,
        slide,
        newSectionSlide,
        focusSlide,
        emptySlide,
      ]),
    ),
    grechina.decl,
    m.lines(
      set(text, { lang: 'en' }),
      show(
        snsPolyluxTemplate_with({
          aspectRatio: '16-9',
          title: inline`Long Title`,
          subtitle: inline`Subtitle`,
          event: inline`University Name Long${linebreak()} Date`,
          shortTitle: inline`Short Title`,
          shortEvent: inline`Univ. Name Short — Da/te/short`,
          logo1: image(path('pics/logo_SNS_bianco.svg')),
          logo2: image(path('pics/logo_SNS_verde.svg')),
          authors: [
            codeBlock(
              [set(text, { topEdge: pt(0), bottomEdge: pt(0) })],
              grid(
                { gutter: em(2), columns: [fr(1), fr(1.2)] },
                align(right, inline`First Author`),
                align(left, inline(link('first.author@uni.uni'))),
              ),
            ),
            codeBlock(
              [set(text, { topEdge: pt(0), bottomEdge: pt(0) })],
              grid(
                { gutter: em(2), columns: [fr(1), fr(1.2)] },
                align(right, inline`Second Author`),
                align(left, inline(link('second.author@uni.uni'))),
              ),
            ),
            codeBlock(
              [set(text, { topEdge: pt(0), bottomEdge: pt(0) })],
              grid(
                { gutter: em(2), columns: [fr(1), fr(1.2)] },
                align(right, inline`Third Author`),
                align(left, inline(link('third.author@uni.uni'))),
              ),
            ),
          ],
        }),
      ),
    ),
    inline(titleSlide()),
    inline(tocSlide({ title: inline`Table of Contents` })),
    inline(
      slide(
        { title: inline`Slide title`, subtitle: inline`Slide subtitle` },
        inline`${space}This slide does not belong to any section.${space}`,
      ),
    ),
    inline(newSectionSlide(inline`First section`)),
    inline(
      slide(
        { title: inline`A slide without subtitle` },
        inline`${space}This slide does not have a subtitle, but belongs to the first section.${space}`,
      ),
    ),
    inline(newSectionSlide(inline`Second section`)),
    inline(
      slide(
        { subtitle: inline`Hidden subtitle` },
        inline`${space}This slide however does not have a title. It belongs to the second section.${space}`,
      ),
    ),
    inline(newSectionSlide(inline`Third section`)),
    inline(focusSlide(inline`${space}This is a ${emph(inline`focus-slide`)}.${space}`)),
    inline(
      slide(
        { newSec: true, title: inline`Fourth section` },
        inline`${space}A slide can also open a new section...${space}`,
      ),
    ),
    inline(
      focusSlide({ newSec: inline`Fifth section` }, inline`${space}... and also a focus-slide can do it!${space}`),
    ),
    inline(emptySlide(inline`${space}Ending slide ${align(center, grechina(pt(65), pt(10), pt(8)))}${space}`)),
  )
}
