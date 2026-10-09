// Converted from test/universe/corpus/touying-unistra-pristine.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  linebreak,
  m,
  path,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('logo', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const unistraTheme = external('unistra-theme')
  const titleSlide = define('title-slide').named('logo', T.any, null).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).named('theme', T.any, null).returns(T.any).external()
  const unistraTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .returns(T.any)
    .external(unistraTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.2', [configInfo]),
      importPackage('@preview/touying-unistra-pristine:1.4.3', [unistraTheme, configInfo, titleSlide, focusSlide]),
    ),
    show(
      unistraTheme_with(
        { aspectRatio: '16-9' },
        configInfo({
          title: inline`Title`,
          author: inline`Author`,
          date: datetime.today().display('[month repr:long] [day], [year repr:full]'),
          logo: image(path('unistrafooter.svg')),
        }),
      ),
    ),
    inline(titleSlide({ logo: image(path('unistra.svg')) })),
    m.heading(1, 'Example Section Title'),
    m.heading(2, 'Example Slide'),
    inline`A slide with ${strong(inline`important information`)}.`,
    inline(
      focusSlide({ theme: 'neon' }, inline`${space}This is a focus slide ${linebreak()} with theme "neon"${space}`),
    ),
  )
}
