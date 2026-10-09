// Converted from test/universe/corpus/touying-endfield.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  luma,
  m,
  set,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.content, [])
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const configPage = define('config-page').named('fill', T.any, null).returns(T.any).external()
  const endfieldTheme = external('endfield-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const numbly = define('numbly').pos('arg1', T.any).named('default', T.any, null).returns(T.any).external()
  const endfieldTheme_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('aspect-ratio', T.any, null)
    .named('footer', T.any, null)
    .named('navigation', T.any, null)
    .returns(T.any)
    .external(endfieldTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.3', [configInfo, configPage]),
      importPackage('@preview/touying-endfield:0.1.1', [endfieldTheme, titleSlide, outlineSlide, focusSlide]),
    ),
    importPackage('@preview/numbly:0.1.0', [numbly]),
    show(
      endfieldTheme_with(
        { aspectRatio: '16-9', footer: unsafeRaw.code<any>`self => self.info.institution`, navigation: 'mini-slides' },
        configInfo({
          title: inline`Presentation Title`,
          subtitle: inline`Presentation Subtitle`,
          author: inline`Author Name`,
          date: inline`2026-01-01`,
          institution: inline`Institution Name`,
        }),
        configPage({ fill: luma(231) }),
      ),
    ),
    set(heading, { numbering: numbly({ default: '1.1' }, '{1}.') }),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'First Section'),
    m.heading(2, 'First Slide'),
    m.list(m.item(['First point']), m.item(['Second point']), m.item(['Third point'])),
    inline(focusSlide(inline`${space}Key takeaway or warning message.${space}`)),
    m.heading(1, 'Second Section'),
    m.heading(2, 'Summary'),
    'Thank you for your attention!',
  )
}
