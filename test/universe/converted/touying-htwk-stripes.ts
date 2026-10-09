// Converted from test/universe/corpus/touying-htwk-stripes.typ by scripts/convert-suite.ts — do not edit.
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
  m,
  path,
  show,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const htwkStripesTheme = external('htwk-stripes-theme')
  const htwkTitleSlide = define('htwk-title-slide').returns(T.any).external()
  const htwkOutline = define('htwk-outline').returns(T.any).external()
  const htwkSources = define('htwk-sources').pos('arg1', T.content).returns(T.any).external()
  const htwkStripesTheme_with = define('with')
    .named('aspect-ratio', T.any, null)
    .named('authors', T.any, null)
    .named('authors-title-slide', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('logo-faculty', T.any, null)
    .named('logo-institution', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(htwkStripesTheme)
  return doc(
    importPackage('@preview/touying-htwk-stripes:1.0.1', [htwkStripesTheme, htwkTitleSlide, htwkOutline, htwkSources]),
    show(
      htwkStripesTheme_with({
        aspectRatio: '4-3',
        title: inline`Title`,
        subtitle: inline`Subtitle`,
        authors: ['Author A'],
        authorsTitleSlide: inline`${space}Author A${space}`,
        date: datetime.today(),
        institution: inline`HTWK Leipzig`,
        logoInstitution: image(path('uoe.svg')),
        logoFaculty: image(path('foe.svg')),
      }),
    ),
    inline(htwkTitleSlide()),
    inline(htwkOutline()),
    m.lines(
      m.heading(1, 'Example Section Title'),
      m.heading(2, 'Example Slide'),
      inline`A slide with ${strong(inline`important information`)}.`,
    ),
    m.lines(m.heading(1, 'Second Section'), m.heading(2, 'First Slide'), 'Hello'),
    m.lines(m.heading(2, 'Second Slide'), 'World'),
    inline(htwkSources(inline`...`)),
  )
}
