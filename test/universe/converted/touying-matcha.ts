// Converted from test/universe/corpus/touying-matcha.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show, space, sym } from '../../../src/index.ts'

export default () => {
  const matchaTheme = external('matcha-theme')
  const titleSlide = define('title-slide')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const slide = define('slide').pos('arg1', T.content).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const matchaTheme_with = define('with')
    .named('aspect-ratio', T.any, null)
    .named('footer', T.any, null)
    .returns(T.any)
    .external(matchaTheme)
  return doc(
    importPackage('@preview/touying-matcha:0.1.0', [matchaTheme, titleSlide, slide, focusSlide]),
    show(matchaTheme_with({ aspectRatio: '16-9', footer: null })),
    inline(titleSlide({ title: 'My Presentation', author: 'Your Name', date: datetime.today() })),
    m.heading(1, 'Section'),
    m.heading(2, 'Slide Title'),
    inline(slide(inline`${space}Content goes here...${space}`)),
    inline(focusSlide(inline`${space}Key takeaway${space}`)),
  )
}
