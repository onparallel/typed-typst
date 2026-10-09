// Converted from test/universe/corpus/covered-cs-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  heading,
  importPackage,
  inches,
  inline,
  label,
  let_,
  lorem,
  m,
  outline,
  page,
  pagebreak,
  path,
  quote,
  set,
  show,
} from '../../../src/index.ts'

export default () => {
  const article = external('article')
  const csThesisCover = define('cs-thesis-cover')
    .named('author', T.any, null)
    .named('date-submission', T.content, [])
    .named('institute', T.any, null)
    .named('language', T.any, null)
    .named('matriculation-number', T.any, null)
    .named('supervisor', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .named('working-group', T.any, null)
    .returns(T.any)
    .external()
  const article_with = define('with')
    .named('cols', T.any, null)
    .named('eq-chapterwise', T.any, null)
    .named('eq-numbering', T.any, null)
    .named('header-display', T.any, null)
    .named('header-title', T.any, null)
    .named('lang', T.any, null)
    .named('page-margins', T.any, null)
    .named('page-paper', T.any, null)
    .returns(T.any)
    .external(article)
  const [languageDecl, language] = let_('language', 'en')
  const [titleDecl, title_2] = let_('title', 'What are ducks?')
  return doc(
    m.lines(
      importPackage('@preview/rubber-article:0.5.0', [article]),
      importPackage('@preview/covered-cs-thesis:0.1.5', [csThesisCover]),
    ),
    languageDecl,
    titleDecl,
    show(
      article_with({
        cols: null,
        eqChapterwise: true,
        eqNumbering: '(1.1)',
        headerDisplay: true,
        headerTitle: title_2,
        lang: language,
        pageMargins: inches(1.75),
        pagePaper: 'a4',
      }),
    ),
    inline(
      csThesisCover({
        title: title_2,
        language: language,
        author: 'Max Mustermann',
        matriculationNumber: '12345678',
        thesisType: "Bachelor's Thesis",
        university: 'Heidelberg University',
        institute: 'Institut für Informatik',
        workingGroup: 'Duck Feather Laboratory',
        supervisor: 'Professor Einstein',
        dateSubmission: inline(datetime.today().display()),
      }),
    ),
    inline(heading({ numbering: null, outlined: false }, inline`Zusammenfassung`)),
    inline(lorem(300)),
    inline(pagebreak()),
    inline(heading({ numbering: null, outlined: false }, inline`Abstract`)),
    inline(lorem(300)),
    inline(pagebreak()),
    set(page, { numbering: '1' }),
    inline(outline()),
    inline(pagebreak()),
    m.heading(1, 'Chapters of the thesis'),
    inline(lorem(23)),
    m.heading(2, 'Example Subchapter'),
    inline(quote({ attribution: label('test') }, inline`Ducks are very sweet.`)),
    inline(pagebreak()),
    inline(bibliography({ full: true }, path('bibliography.yaml'))),
  )
}
