// Converted from test/universe/corpus/bypst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  emph,
  external,
  fr,
  importPackage,
  inline,
  m,
  show,
  space,
  strong,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const bipsTheme = external('bips-theme')
  const titleSlide = define('title-slide')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('institute', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const bipsEn = external('bips-en')
  const bipsSlide = define('bips-slide')
    .rest('args', T.any)
    .named('composer', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const sectionSlide = define('section-slide').pos('arg1', T.any).returns(T.any).external()
  const twoColumns = define('two-columns').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const blue_2 = define('blue').pos('arg1', T.content).returns(T.any).external()
  const thanksSlide = define('thanks-slide')
    .named('contact-author', T.any, null)
    .named('email', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/bypst:0.5.0', [
      bipsTheme,
      titleSlide,
      bipsEn,
      bipsSlide,
      sectionSlide,
      twoColumns,
      blue_2,
      thanksSlide,
    ]),
    show(bipsTheme),
    inline(
      titleSlide({
        title: 'Your Presentation Title',
        subtitle: 'Optional Subtitle',
        author: 'Your Name',
        institute: bipsEn,
        date: datetime.today().display(),
      }),
    ),
    inline(
      bipsSlide(
        { title: 'Introduction' },
        blocks(
          inline`Your content here...`,
          m.list(
            m.item(['Bullet points']),
            m.item(['Math:', space, unsafeRaw.math`x^2 + y^2 = z^2`]),
            m.item([strong(inline`Bold`), space, 'and', space, emph(inline`italic`), space, 'text']),
          ),
        ),
      ),
    ),
    inline(sectionSlide('Results')),
    inline(
      bipsSlide(
        { title: 'Main Findings', composer: [fr(1), fr(2)] },
        blocks(m.list(m.item(['First finding']), m.item(['Second finding']), m.item(['Third finding']))),
        blocks(
          'A wider pane with room for more detail.',
          inline(
            twoColumns(
              inline`${space}A nested two-column layout.${space}`,
              inline(space, blue_2(inline`The nested right column.`), space),
            ),
          ),
          'Text continues below the nested columns.',
        ),
      ),
    ),
    inline(thanksSlide({ contactAuthor: 'Your Name', email: 'your.email@leibniz-bips.de' })),
  )
}
