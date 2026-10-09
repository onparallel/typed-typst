// Converted from test/universe/corpus/touying-wave-hhu.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const hhuTheme = external('hhu-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const configPage = define('config-page').named('footer', T.any, null).returns(T.any).external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const hhuTheme_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('aspect-ratio', T.any, null)
    .returns(T.any)
    .external(hhuTheme)
  return doc(
    importPackage('@preview/touying-wave-hhu:0.2.0', [hhuTheme, configInfo, configPage, titleSlide]),
    show(
      hhuTheme_with(
        { aspectRatio: '16-9' },
        configInfo({
          title: inline`Title`,
          subtitle: inline`Subtitle`,
          author: inline`Author`,
          date: datetime.today(),
          institution: inline`Institution`,
        }),
        configPage({
          footer: unsafeRaw.code<any>`(self) => {
      self.info.title
    }`,
        }),
      ),
    ),
    inline(titleSlide()),
  )
}
