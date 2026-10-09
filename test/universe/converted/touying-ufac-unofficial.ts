// Converted from test/universe/corpus/touying-ufac-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('counter-prefix', T.content, [])
    .named('subject', T.content, [])
    .named('subject-code', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const ufacTheme = external('ufac-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const ufacTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('lang', T.any, null)
    .returns(T.any)
    .external(ufacTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.7.4', [configInfo]),
      importPackage('@preview/touying-ufac-unofficial:0.1.0', [ufacTheme, configInfo, titleSlide]),
    ),
    show(
      ufacTheme_with(
        { aspectRatio: '16-9', lang: 'en' },
        configInfo({
          title: inline`Title of the teaching unit`,
          subtitle: inline`Teaching unit I`,
          author: inline`Prof. Dr. Your Name`,
          subject: inline`Subject name`,
          subjectCode: inline`CODE or Department`,
          counterPrefix: inline`1.`,
        }),
      ),
    ),
    inline(titleSlide()),
    m.lines(m.heading(2, 'Slide title'), m.heading(3, 'Subtitle')),
    'Text.',
  )
}
