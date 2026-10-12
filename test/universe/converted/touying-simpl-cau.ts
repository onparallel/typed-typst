// Converted from test/universe/corpus/touying-simpl-cau.typ by scripts/convert-suite.ts — do not edit.
import { T, datetime, define, doc, external, heading, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const cauTheme = external('cau-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const cauTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(cauTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.8.0', [configInfo]),
      importPackage('@preview/touying-simpl-cau:0.2.2', [cauTheme, configInfo, titleSlide, outlineSlide]),
    ),
    show(
      cauTheme_with(
        configInfo({
          title: inline`Touying for CAU: Customize Your Slide Title Here`,
          subtitle: inline`Customize Your Slide Subtitle Here`,
          author: inline`Authors`,
          date: datetime.today(),
          institution: inline`China Agricultural University`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    heading({ depth: 1 }, inline('The section I')),
    heading({ depth: 2 }, inline('Slide I / i')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide I / ii')),
    'Slide content.',
    heading({ depth: 1 }, inline('The section II')),
    heading({ depth: 2 }, inline('Slide II / i')),
    'Slide content.',
    heading({ depth: 2 }, inline('Slide II / ii')),
    'Slide content.',
  )
}
