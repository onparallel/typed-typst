// Converted from test/universe/corpus/touying-simpl-swufe.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  center,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  fr,
  horizon,
  importPackage,
  inline,
  m,
  pt,
  raw,
  rgb,
  show,
  super_,
  table,
} from '../../../src/index.ts'

export default () => {
  const swufeTheme = external('swufe-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('authors', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('short-title', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const configColors = define('config-colors')
    .named('neutral-darkest', T.any, null)
    .named('neutral-lightest', T.any, null)
    .named('primary', T.any, null)
    .named('primary-dark', T.any, null)
    .named('secondary', T.any, null)
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const endingSlide = define('ending-slide').pos('arg1', T.any).returns(T.any).external()
  const swufeTheme_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('aspect-ratio', T.any, null)
    .named('lang', T.any, null)
    .returns(T.any)
    .external(swufeTheme)
  return doc(
    importPackage('@preview/touying-simpl-swufe:0.2.1', [
      swufeTheme,
      configInfo,
      configColors,
      titleSlide,
      outlineSlide,
      endingSlide,
    ]),
    m.lines(
      show(
        swufeTheme_with(
          { aspectRatio: '16-9', lang: 'en' },
          configInfo({
            title: inline`Typst Slide Theme for Southwest University of Finance and Economics Based on Touying`,
            subtitle: inline`基于Touying的西南财经大学Typst幻灯片模板`,
            shortTitle: inline`Typst Slide Theme for SWUFE Based on Touying`,
            authors: inline`雷超${super_('1')}, Lei Chao${super_('1,2')}`,
            author: inline`Presenter: Lei Chao`,
            date: datetime.today(),
            institution: [inline`${super_('1')}金融学院 西南财经大学`, inline`${super_('2')}西南财经大学`],
          }),
          configColors({
            primary: rgb(1, 83, 139),
            primaryDark: rgb(0, 42, 70),
            secondary: rgb(255, 255, 255),
            neutralLightest: rgb(255, 255, 255),
            neutralDarkest: rgb(0, 0, 0),
          }),
        ),
      ),
      inline(titleSlide()),
    ),
    inline(outlineSlide()),
    m.heading(1, 'The section I'),
    m.heading(2, 'Slide I / i'),
    m.list(
      m.item(m.lines('Slide content.', m.list(m.item(['content point 1']), m.item(['content point 2'])))),
      m.item(['Slide content.']),
    ),
    m.heading(2, 'Slide I / ii'),
    'Slide content.',
    m.heading(1, 'The section II'),
    m.lines(
      m.heading(2, 'Slide II / i'),
      m.list(m.item(['Insert figure'])),
      inline(
        raw(
          { block: true, lang: 'typst' },
          '#figure(\n  image("fig.png", width: auto, height: 80%),\n  caption: [Example Figure],\n)',
        ),
      ),
    ),
    m.heading(2, 'Slide II / ii'),
    inline(
      figure(
        { caption: 'Example Table' },
        table(
          { columns: [fr(1), fr(1), fr(1)], stroke: null, align: add(center, horizon), inset: em(0.5) },
          table.hline({ stroke: pt(2) }),
          inline`Name`,
          inline`Age`,
          inline`Major`,
          table.hline({ stroke: pt(1) }),
          inline`Zhang San`,
          inline`23`,
          inline`Finance`,
          inline`Li Si`,
          inline`22`,
          inline`Economics`,
          inline`Wang Wu`,
          inline`24`,
          inline`Accounting`,
          table.hline({ stroke: pt(2) }),
        ),
      ),
    ),
    m.lines(m.heading(1, 'Last Section'), m.heading(2), inline(endingSlide('Thank You!'))),
  )
}
