// Converted from test/universe/corpus/touying-dids.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const didsTheme = external('dids-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const didsTheme_with = define('with').pos('arg1', T.any).returns(T.any).external(didsTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.5.3', [configInfo]),
      importPackage('@preview/touying-dids:0.1.0', [didsTheme, configInfo, titleSlide, outlineSlide]),
    ),
    show(
      didsTheme_with(
        configInfo({
          title: inline`Touying for DIDS: Customize Your Slide Title Here`,
          subtitle: inline`Customize Your Slide Subtitle Here`,
          author: inline`Authors`,
          date: datetime.today(),
          institution: inline`NUDT DIDS`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'The section I'),
    m.heading(2, 'Slide I / i'),
    'Slide content.',
    m.heading(2, 'Slide I / ii'),
    'Slide content.',
    m.heading(1, 'The section II'),
    m.heading(2, 'Slide II / i'),
    'Slide content.',
    m.heading(2, 'Slide II / ii'),
    'Slide content.',
  )
}
