// Converted from test/universe/corpus/touying-brandred-uobristol.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const uobristolTheme = external('uobristol-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const configCommon = define('config-common').named('datetime-format', T.any, null).returns(T.any).external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const uobristolTheme_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .returns(T.any)
    .external(uobristolTheme)
  return doc(
    importPackage('@preview/touying-brandred-uobristol:0.2.0', [
      uobristolTheme,
      configInfo,
      configCommon,
      titleSlide,
      outlineSlide,
    ]),
    show(
      uobristolTheme_with(
        configInfo({
          title: inline`Title Here`,
          subtitle: inline`Subtitle Here`,
          author: inline`Authors`,
          date: datetime.today(),
          institution: inline`Institution`,
        }),
        configCommon({ datetimeFormat: '[day] [month repr:short] [year]' }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'First Section'),
    m.heading(2, 'Slide 1'),
    'Slide content.',
  )
}
