// Converted from test/universe/corpus/bookly.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  data,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  let_,
  lorem,
  m,
  path,
  pct,
  rgb,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const bookly = external('bookly')
  const bookTitlePage = define('book-title-page')
    .named('cover', T.any, null)
    .named('institution', T.any, null)
    .named('logo', T.any, null)
    .named('series', T.any, null)
    .named('show-cover-author', T.any, null)
    .named('version-usage', T.any, null)
    .returns(T.any)
    .external()
  const frontMatter = external('front-matter')
  const mainMatter = external('main-matter')
  const tableofcontents = external('tableofcontents')
  const listoffigures = external('listoffigures')
  const listoftables = external('listoftables')
  const part = define('part').pos('arg1', T.any).returns(T.any).external()
  const appendix = external('appendix')
  const backCover = define('back-cover')
    .named('abstracts', T.any, null)
    .named('logo', T.any, null)
    .returns(T.any)
    .external()
  const custom = external('custom')
  const bookly_with = define('with')
    .named('author', T.any, null)
    .named('config-options', T.any, null)
    .named('fonts', T.any, null)
    .named('lang', T.any, null)
    .named('theme', T.any, null)
    .named('title-page', T.any, null)
    .returns(T.any)
    .external(bookly)
  const [configColorsDecl, configColors] = let_('config-colors', {
    primary: rgb('#1d90d0'),
    secondary: rgb('#dddddd').darken(pct(15)),
  })
  const [abstractsFrEnDecl, abstractsFrEn] = let_('abstracts-fr-en', [
    { title: inline`${set(text, { lang: 'fr' })} Résumé :`, text: inline(lorem(100)) },
    { title: inline`${set(text, { lang: 'en', region: 'gb' })} Abstract:`, text: inline(lorem(100)) },
  ])
  const [logosDecl, logos] = let_(
    'logos',
    data([
      image({ width: pct(75) }, path('images/typst-logo.svg')),
      image({ width: pct(75) }, path('images/typst-logo.svg')),
    ]),
  )
  return doc(
    m.lines(
      importPackage('@preview/bookly:5.1.1', [
        bookly,
        bookTitlePage,
        frontMatter,
        mainMatter,
        tableofcontents,
        listoffigures,
        listoftables,
        part,
        appendix,
        backCover,
      ]),
      importFile('custom-theme.typ', [custom]),
    ),
    configColorsDecl,
    show(
      bookly_with({
        author: 'Author Name',
        fonts: { body: 'Lato', math: 'Lete Sans Math' },
        theme: custom,
        lang: 'en',
        titlePage: bookTitlePage({
          series: 'Typst book series',
          institution: 'Typst community',
          logo: image(path('images/typst-logo.svg')),
          cover: image({ width: pct(45) }, path('images/book-cover.jpg')),
          showCoverAuthor: true,
          versionUsage:
            'This is a template for writing books with Typst. It is part of the Bookly project, which provides tools and themes for book production. The template includes features such as a title page, table of contents, list of figures and tables, and support for chapters and appendices. It also includes a bibliography section for citing sources.',
        }),
        configOptions: { openRight: true, parIndent: true, paperSize: 'a5' },
      }),
    ),
    show(frontMatter),
    includeFile('front_matter/front_main.typ'),
    show(mainMatter),
    inline(tableofcontents),
    inline(listoffigures),
    inline(listoftables),
    inline(part(inline`First part`)),
    includeFile('chapters/ch_main.typ'),
    inline(part('Second part')),
    show(appendix),
    includeFile('appendix/app_main.typ'),
    inline(bibliography(path('bibliography/sample.bib'))),
    abstractsFrEnDecl,
    logosDecl,
    inline(backCover({ abstracts: abstractsFrEn, logo: logos })),
  )
}
