// Converted from test/universe/corpus/benplate.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  importFile,
  importPackage,
  inline,
  let_,
  lorem,
  m,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const accentColor = external('accent-color')
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const defaultFrontmatter = define('default-frontmatter')
    .named('abstract', T.any, null)
    .named('acknowledgments', T.any, null)
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('city', T.any, null)
    .named('date', T.any, null)
    .named('faculty', T.any, null)
    .named('field', T.any, null)
    .named('first-reviewer', T.any, null)
    .named('second-reviewer', T.any, null)
    .named('type', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external()
  const defaultBackmatter = define('default-backmatter')
    .named('bib-style', T.any, null)
    .named('bibliography', T.any, null)
    .returns(T.any)
    .external()
  const thesis_with = define('with')
    .named('appendix', T.content, [])
    .named('author', T.any, null)
    .named('backmatter', T.any, null)
    .named('date', T.any, null)
    .named('frontmatter', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  const [authorDecl, author] = let_('author', 'Your Name')
  const [dateDecl, date] = let_('date', datetime.today())
  return doc(
    m.lines(
      importPackage('@preview/benplate:0.1.0', [thesis, accentColor, todo]),
      importFile('frontmatter.typ', [defaultFrontmatter]),
      importFile('backmatter.typ', [defaultBackmatter]),
    ),
    m.lines(authorDecl, dateDecl),
    show(
      thesis_with({
        title: 'Your Thesis Title',
        author: author,
        date: date,
        frontmatter: defaultFrontmatter({
          university: 'Your University',
          faculty: 'Your Faculty',
          field: 'Your Program of Study',
          type: 'Thesis Type',
          city: 'Your City',
          author: author,
          date: date,
          advisor: 'Your Advisor',
          firstReviewer: 'Your First Reviewer',
          secondReviewer: 'Your Second Reviewer',
          abstract: todo(inline`Write an abstract`),
          acknowledgments: todo(inline`Write your acknowledgments`),
        }),
        appendix: inline(space),
        backmatter: defaultBackmatter({ bibliography: bibliography(path('references.bib')), bibStyle: 'ieee' }),
      }),
    ),
    m.heading(1, 'Your First Chapter'),
    inline(lorem(75)),
    inline(lorem(130)),
    inline(lorem(90)),
  )
}
