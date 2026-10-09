// Converted from test/universe/corpus/ethz-cadmo-inspired-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  outline,
  path,
  show,
  sym,
} from '../../../src/index.ts'

export default () => {
  const setup = external('setup')
  const frontchapter = define('frontchapter').pos('arg1', T.content).returns(T.any).external()
  const mainmatter = external('mainmatter')
  const appendix = external('appendix')
  const setup_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('bib', T.any, null)
    .named('department', T.any, null)
    .named('thesis-type', T.any, null)
    .returns(T.any)
    .external(setup)
  return doc(
    importPackage('@preview/ethz-cadmo-inspired-thesis:0.2.0', [setup, frontchapter, mainmatter, appendix]),
    show(
      setup_with(
        {
          thesisType: 'Bachelor Thesis',
          department: 'Department of Computer Science',
          bib: bibliography({ title: null }, path('bib.bib')),
        },
        'My Thesis Title',
        'Jane Doe',
        ['Advisor One', 'Advisor Two'],
      ),
    ),
    inline(frontchapter(inline`Abstract`)),
    inline`This thesis is about ...`,
    inline(outline({ depth: 3 })),
    show(mainmatter),
    m.heading(1, 'Introduction'),
    'Some introductory text.',
    m.heading(1, 'Background'),
    'Some background.',
    show(appendix),
    inline(frontchapter(inline`Appendix`)),
    m.heading(2, 'Appendix A'),
  )
}
