// Converted from test/universe/corpus/owl-lst-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  path,
  read,
  set,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const lst = external('lst')
  const addBibResource = define('add-bib-resource').pos('arg1', T.any).returns(T.any).external()
  const cite_2 = define('cite').pos('arg1', T.any).returns(T.any).external()
  const citet = define('citet').pos('arg1', T.any).returns(T.any).external()
  const printLstBibliography = define('print-lst-bibliography').returns(T.any).external()
  const lst_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('degree-program', T.any, null)
    .named('matriculation-number', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(lst)
  return doc(
    m.lines(
      importPackage('@preview/owl-lst-thesis:0.1.0', [lst, addBibResource, cite_2, citet, printLstBibliography]),
      importPackage('@preview/pergamon:0.8.0', [addBibResource, cite_2, citet]),
    ),
    set(text, { lang: 'en' }),
    show(
      lst_with({
        title: 'Thesis Title',
        author: 'Your Name',
        matriculationNumber: 'Your Matriculation Number',
        degreeProgram: 'coli',
        supervisors: [
          ['Supervisors', 'First Supervisor', 'Second Supervisor'],
          ['Additional advisor', 'Additional Advisor'],
        ],
        date: 'Submission Date',
        abstract: inline`${space}Write your abstract here.${space}`,
        acknowledgments: inline`${space}Write optional acknowledgments here, or remove this argument.${space}`,
      }),
    ),
    inline(addBibResource(read(path('custom.bib')))),
    m.heading(1, 'Introduction'),
    'Start writing your thesis here.',
    m.heading(1, 'Background'),
    inline`Many interesting combinatorial problems are NP-complete ${cite_2('GareyJohnsonBook')}.`,
    inline`${citet('bender-koller-2020-climbing')} argued that meaning cannot be learned from form alone.`,
    m.heading(1, 'My Contribution'),
    m.heading(1, 'Conclusion'),
    inline(printLstBibliography()),
  )
}
