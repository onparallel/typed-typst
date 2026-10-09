// Converted from test/universe/corpus/touying-simpl-sjtu.typ by scripts/convert-suite.ts — do not edit.
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
  space,
} from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const sjtuTheme = external('sjtu-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const endSlide = define('end-slide').pos('arg1', T.content).returns(T.any).external()
  const sjtuTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(sjtuTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configInfo]),
      importPackage('@preview/touying-simpl-sjtu:0.1.0', [sjtuTheme, configInfo, titleSlide, outlineSlide, endSlide]),
    ),
    show(
      sjtuTheme_with(
        configInfo({
          title: inline`Touying for SJTU: Customize Your Slide Title Here`,
          subtitle: inline`Customize Your Slide Subtitle Here`,
          author: inline`Authors`,
          date: datetime.today(),
          institution: inline`Shanghai Jiao Tong University`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'The section I'),
    m.heading(2, 'Slide I / i'),
    'Slide content.',
    m.heading(1, 'The section II'),
    m.heading(2, 'Slide II / i'),
    'Slide content.',
    m.heading(2, 'Slide II / ii'),
    'Slide content.',
    m.heading(1, 'The section III'),
    m.heading(2, 'Slide III / i'),
    'Slide content.',
    m.heading(2, 'Slide III / ii'),
    'Slide content.',
    m.heading(2, 'Slide III / iii'),
    'Slide content.',
    m.heading(1, 'The section IV'),
    m.heading(2, 'Slide IV / i'),
    'Slide content.',
    m.heading(2, 'Slide IV / ii'),
    'Slide content.',
    m.heading(2, 'Slide IV / iii'),
    'Slide content.',
    m.heading(2, 'Slide IV / iv'),
    'Slide content.',
    inline(labelled(heading({ depth: 2 }, inline('End')), label('touying:unoutlined'))),
    inline(endSlide(inline`${space}Thanks for Listening!${space}`)),
  )
}
