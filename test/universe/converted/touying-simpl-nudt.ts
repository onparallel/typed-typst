// Converted from test/universe/corpus/touying-simpl-nudt.typ by scripts/convert-suite.ts — do not edit.
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
  const nudtTheme = external('nudt-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const endSlide = define('end-slide').pos('arg1', T.content).returns(T.any).external()
  const nudtTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(nudtTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configInfo]),
      importPackage('@preview/touying-simpl-nudt:0.1.0', [nudtTheme, configInfo, titleSlide, outlineSlide, endSlide]),
    ),
    show(
      nudtTheme_with(
        configInfo({
          title: inline`Touying for NUDT: Customize Your Slide Title Here`,
          subtitle: inline`Customize Your Slide Subtitle Here`,
          author: inline`Authors`,
          date: datetime.today(),
          institution: inline`National University of Defense Technology`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    heading({ depth: 1 }, inline('The section I')),
    heading({ depth: 2 }, inline('Slide I / i')),
    'Slide content.',
    heading({ depth: 1 }, inline('The section II')),
    heading({ depth: 2 }, inline('Slide II / i')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide II / ii')),
    'Slide content.',
    heading({ depth: 1 }, inline('The section III')),
    heading({ depth: 2 }, inline('Slide III / i')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide III / ii')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide III / iii')),
    'Slide content.',
    heading({ depth: 1 }, inline('The section IV')),
    heading({ depth: 2 }, inline('Slide IV / i')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide IV / ii')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide IV / iii')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide IV / iv')),
    'Slide content.',
    inline(labelled(heading({ depth: 2 }, inline('End')), label('touying:unoutlined'))),
    inline(endSlide(inline`${space}Thanks for Listening!${space}`)),
  )
}
