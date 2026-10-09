// Converted from test/universe/corpus/scholarly-epfl-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  page,
  pagebreak,
  set,
  show,
  space,
  table,
  where,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const frontMatter = external('front-matter')
  const mainMatter = external('main-matter')
  const backMatter = external('back-matter')
  const template_with = define('with').named('author', T.any, null).returns(T.any).external(template)
  return doc(
    importPackage('@preview/scholarly-epfl-thesis:0.2.0', [template, frontMatter, mainMatter, backMatter]),
    show(template_with({ author: 'Your name' })),
    set(page, { numbering: null }),
    m.lines(
      includeFile('head/cover-page.typ'),
      inline(pagebreak(), space, pagebreak(), space, includeFile('head/dedication.typ')),
    ),
    show(frontMatter),
    m.lines(
      includeFile('head/acknowledgements.typ'),
      includeFile('head/preface.typ'),
      includeFile('head/abstracts.typ'),
    ),
    inline(
      outline({ title: 'Contents' }),
      space,
      outline({ title: 'List of Figures', target: where(figure, { kind: image }) }),
      space,
      outline({ title: 'List of Tables', target: where(figure, { kind: table }) }),
    ),
    show(mainMatter),
    m.lines(
      includeFile('main/ch1_introduction.typ'),
      includeFile('main/ch2_figures_tables.typ'),
      includeFile('main/ch3_math.typ'),
      includeFile('main/ch4_more_text.typ'),
      includeFile('main/ch5_the_others.typ'),
    ),
    show(backMatter),
    m.lines(includeFile('tail/appendix.typ'), includeFile('tail/biblio.typ')),
  )
}
