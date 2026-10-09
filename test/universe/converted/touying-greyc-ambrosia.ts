// Converted from test/universe/corpus/touying-greyc-ambrosia.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blue,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  red,
  show,
  space,
  strong,
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
  const appendix = external('appendix')
  const alert = define('alert').pos('arg1', T.content).returns(T.any).external()
  const greycTheme = external('greyc-theme')
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const tblock = define('tblock')
    .pos('arg1', T.content)
    .named('fill', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const framedTblock = define('framed-tblock')
    .pos('arg1', T.content)
    .named('fill', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const endingSlide = define('ending-slide')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const greycTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('flavor', T.any, null)
    .returns(T.any)
    .external(greycTheme)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.2', [configInfo, appendix, alert]),
      importPackage('@preview/touying-greyc-ambrosia:0.1.0', [
        greycTheme,
        configInfo,
        titleSlide,
        outlineSlide,
        focusSlide,
        tblock,
        framedTblock,
        endingSlide,
        appendix,
        alert,
      ]),
    ),
    show(
      greycTheme_with(
        { flavor: 'legacy', aspectRatio: '16-9' },
        configInfo({
          title: inline`Title`,
          subtitle: inline`Subtitle`,
          author: inline`Author`,
          date: datetime.today().display('[month repr:long] [day], [year repr:full]'),
          institution: inline`Institution`,
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'Example Section'),
    m.heading(2, 'Example Slide 1'),
    inline`A slide with ${strong(inline`important information`)}.`,
    inline(focusSlide(inline`${space}Wake up!${space}`)),
    m.heading(2, 'Example Slide 2'),
    m.heading(3, 'Example Heading'),
    inline(tblock({ title: inline`Example Block`, fill: blue }, inline`${space}Block content.${space}`)),
    inline(framedTblock({ title: inline`Example Framed Block`, fill: red }, inline`${space}Block content.${space}`)),
    inline(endingSlide({ title: 'The End' }, inline`${space}Thanks for your attention!${space}`)),
    show(appendix),
    m.heading(2, 'Backup Slide'),
    inline`A slide with ${alert(inline`extra information`)}.`,
  )
}
