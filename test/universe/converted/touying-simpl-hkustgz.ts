// Converted from test/universe/corpus/touying-simpl-hkustgz.typ by scripts/convert-suite.ts — do not edit.
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
  const hkustgzTheme = external('hkustgz-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const hkustgzTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(hkustgzTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configInfo]),
      importPackage('@preview/touying-simpl-hkustgz:0.1.2', [hkustgzTheme, configInfo, titleSlide, outlineSlide]),
    ),
    show(
      hkustgzTheme_with(
        configInfo({
          title: inline`Touying for HKUST(GZ): Customize Your Slide Title Here`,
          subtitle: inline`Customize Your Slide Subtitle Here`,
          author: inline`Yusheng Zhao`,
          date: datetime.today(),
          institution: inline`HKUST(GZ)`,
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
