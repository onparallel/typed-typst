// Converted from test/universe/corpus/ens-rennes-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, external, importPackage, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const ensRennesTheme = external('ens-rennes-theme')
  const configInfo = define('config-info')
    .named('authors', T.content, [])
    .named('date', T.any, null)
    .named('mini-authors', T.content, [])
    .named('mini-title', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').named('additional-content', T.content, []).returns(T.any).external()
  const slide = define('slide').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const ensRennesTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .named('department', T.any, null)
    .named('display-dpt', T.any, null)
    .named('named-index', T.any, null)
    .named('section-style', T.any, null)
    .returns(T.any)
    .external(ensRennesTheme)
  return doc(
    importPackage('@preview/ens-rennes-presentation:0.1.0', [ensRennesTheme, configInfo, titleSlide, slide]),
    show(
      ensRennesTheme_with(
        {
          aspectRatio: '16-9',
          sectionStyle: 'named subsection',
          department: 'info',
          displayDpt: false,
          namedIndex: true,
        },
        configInfo({
          title: inline`ENS Rennes presentation theme`,
          subtitle: inline`You can also add a subtitle`,
          miniTitle: inline`ENS Rennes presentation`,
          authors: inline`Janet Doe`,
          miniAuthors: inline`Doe`,
          date: datetime.today(),
        }),
      ),
    ),
    inline(titleSlide({ additionalContent: inline`Any additional content you wish here` })),
    m.heading(1, 'Section 1'),
    m.heading(2, 'Subsection 1.1'),
    inline(slide({ title: inline`First slide` }, inline`${space}Content${space}`)),
  )
}
