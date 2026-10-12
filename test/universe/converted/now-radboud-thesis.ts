// Converted from test/universe/corpus/now-radboud-thesis.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  blocks,
  datetime,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  label,
  link,
  lorem,
  m,
  outline,
  path,
  ref,
  show,
} from '../../../src/index.ts'

export default () => {
  const radboudThesis = external('radboud-thesis')
  const appendix = external('appendix')
  const radboudThesis_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('study', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisors', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(radboudThesis)
  return doc(
    importPackage('@preview/now-radboud-thesis:0.1.0', [radboudThesis, appendix]),
    show(
      radboudThesis_with({
        title: 'Title',
        subtitle: 'Subtitle',
        author: { name: 'Author', studentNumber: 's1234567' },
        supervisors: [
          ['Supervisor', 'dr. Dewey Duck'],
          ['Second reader', 'prof. dr. Louie Duck'],
        ],
        abstract: blocks(
          inline`Template for Radboud University Bachelor's/Master's thesis`,
          inline`Source code can be found at ${link('https://github.com/Jorritboer/radboud-thesis-typst')}.`,
        ),
        thesisType: "Master's Thesis",
        study: 'Computing Science',
        date: datetime.today(),
      }),
    ),
    inline(outline()),
    m.lines(heading({ depth: 1 }, inline('Introduction')), inline(lorem(100))),
    inline`Reference ${ref(label('reference'))}`,
    m.lines(heading({ depth: 1 }, inline('Preliminaries')), inline(lorem(100))),
    m.lines(heading({ depth: 1 }, inline('Results')), inline(lorem(100))),
    m.lines(heading({ depth: 1 }, inline('Related Work')), inline(lorem(100))),
    m.lines(heading({ depth: 1 }, inline('Conclusion')), inline(lorem(100))),
    inline(bibliography({ style: 'association-for-computing-machinery' }, path('bibliography.bib'))),
    show(appendix),
    m.lines(heading({ depth: 1 }, inline('Proofs')), inline(lorem(100))),
  )
}
