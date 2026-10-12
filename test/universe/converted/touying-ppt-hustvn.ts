// Converted from test/universe/corpus/touying-ppt-hustvn.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, external, heading, importPackage, inline, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const pause = external('pause')
  const hustTheme = external('hust-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const endingSlide = define('ending-slide').named('title', T.content, []).returns(T.any).external()
  const hustTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(hustTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configInfo, pause]),
      importPackage('@preview/touying-ppt-hustvn:0.1.0', [
        hustTheme,
        configInfo,
        titleSlide,
        outlineSlide,
        pause,
        endingSlide,
      ]),
    ),
    show(
      hustTheme_with(
        { theme: 'red', aspectRatio: '16-9' },
        configInfo({ title: inline`Your title here`, subtitle: inline`Optional subtitle` }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    heading({ depth: 1 }, inline('Introduction')),
    heading({ depth: 2 }, inline('Introduction')),
    inline(lorem(20)),
    inline(pause),
    inline(lorem(30)),
    heading({ depth: 1 }, inline('Conclusion')),
    heading({ depth: 2 }, inline('Conclusion')),
    inline(lorem(30)),
    inline(pause),
    inline(lorem(20)),
    inline(endingSlide({ title: inline`THANK YOU!` })),
  )
}
