// Converted from test/universe/corpus/bluenote-ist.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  em,
  external,
  heading,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  set,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const istTheme = external('ist-theme')
  const configInfo = define('config-info')
    .named('author', T.any, null)
    .named('contact', T.any, null)
    .named('date', T.any, null)
    .named('institution', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const numbly = define('numbly').pos('arg1', T.any).named('default', T.any, null).returns(T.any).external()
  const titleSlide = define('title-slide').named('bg-img', T.any, null).returns(T.any).external()
  const backgroundImage = external('background-image')
  const outlineSlide = define('outline-slide')
    .named('indent', T.any, null)
    .named('level', T.any, null)
    .named('spacing', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const endSlide = define('end-slide').pos('arg1', T.any).returns(T.any).external()
  const pptConfig = external('ppt-config')
  const istTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('footer', T.any, null)
    .returns(T.any)
    .external(istTheme)
  const pptConfig_title = external('title', pptConfig)
  const pptConfig_subtitle = external('subtitle', pptConfig)
  const pptConfig_author = external('author', pptConfig)
  const pptConfig_date = external('date', pptConfig)
  const pptConfig_contact = external('contact', pptConfig)
  const pptConfig_institution = external('institution', pptConfig)
  return doc(
    m.lines(
      importPackage('@preview/bluenote-ist:0.1.1', [
        istTheme,
        configInfo,
        numbly,
        titleSlide,
        backgroundImage,
        outlineSlide,
        endSlide,
      ]),
      importFile('ppt-config.typ', [pptConfig]),
    ),
    show(
      istTheme_with(
        { aspectRatio: '16-9', footer: unsafeRaw.code<any>`self => self.info.institution` },
        configInfo({
          title: pptConfig_title,
          subtitle: pptConfig_subtitle,
          author: pptConfig_author,
          date: pptConfig_date,
          contact: pptConfig_contact,
          institution: pptConfig_institution,
        }),
      ),
    ),
    set(heading, { numbering: numbly({ default: '1.1' }, '{1}.') }),
    inline(titleSlide({ bgImg: backgroundImage })),
    inline(outlineSlide({ title: null, level: 2, indent: em(1), spacing: em(0.5) })),
    includeFile('sections.typ'),
    inline(endSlide('Thank you')),
  )
}
