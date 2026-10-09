// Converted from test/universe/corpus/simple-inria-touying-theme.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  m,
  show,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const inriaTheme = external('inria-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const newSectionSlide = define('new-section-slide').pos('arg1', T.content).returns(T.any).external()
  const inriaTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('black-title', T.any, null)
    .named('footer-progress', T.any, null)
    .named('section-slides', T.any, null)
    .returns(T.any)
    .external(inriaTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.3', [configInfo]),
      importPackage('@preview/simple-inria-touying-theme:0.1.2', [inriaTheme, configInfo, titleSlide, newSectionSlide]),
    ),
    show(
      inriaTheme_with(
        { aspectRatio: '16-9', footerProgress: true, sectionSlides: true, blackTitle: true },
        configInfo({
          title: inline`Title`,
          subtitle: inline`Subtitle`,
          author: inline`Authors`,
          date: datetime.today(),
        }),
      ),
    ),
    inline(titleSlide()),
    m.heading(1, 'First Slide'),
    'Content',
    inline(labelled(heading({ depth: 1 }, inline('New Section')), label('touying:hidden'))),
    inline(newSectionSlide(inline`Hello there!`)),
    m.heading(1, 'Another slide with very long title to be sized accordingly in the header of the slide'),
    'More Content',
  )
}
