// Converted from test/universe/corpus/starter-journal-article.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  dict,
  doc,
  external,
  importPackage,
  inline,
  label,
  lorem,
  m,
  path,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const authorMeta = define('author-meta')
    .rest('args', T.any)
    .named('cofirst', T.any, null)
    .named('email', T.any, null)
    .returns(T.any)
    .external()
  const article_with = define('with')
    .named('abstract', T.content, [])
    .named('affiliations', T.any, null)
    .named('authors', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(article)
  return doc(
    importPackage('@preview/starter-journal-article:0.5.1', [article, authorMeta]),
    show(
      article_with({
        title: 'Article Title',
        authors: dict({
          'Author One': authorMeta({ email: 'author.one@inst.ac.uk' }, 'UCL', 'TSU'),
          'Author Two': authorMeta({ cofirst: true }, 'TSU'),
          'Author Three': authorMeta('TSU'),
        }),
        affiliations: {
          UCL: 'UCL Centre for Advanced Spatial Analysis, First Floor, 90 Tottenham Court Road, London W1T 4TJ, United Kingdom',
          TSU: 'Haidian  District, Beijing, 100084, P. R. China',
        },
        abstract: inline(lorem(100)),
        keywords: ['Typst', 'Template', 'Journal Article'],
      }),
    ),
    m.heading(1, 'Section'),
    inline(lorem(20), space, ref(label('netwok2020'))),
    m.heading(2, 'Subsection'),
    inline(lorem(50)),
    m.heading(3, 'Subsubsection'),
    inline(lorem(80)),
    inline(bibliography(path('./ref.bib'))),
  )
}
