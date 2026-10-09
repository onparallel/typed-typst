// Converted from test/universe/corpus/problemst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  pagebreak,
  raw,
  show,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const pset = external('pset')
  const pset_with = define('with')
    .named('class', T.any, null)
    .named('collaborators', T.any, null)
    .named('date', T.any, null)
    .named('student', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(pset)
  const deriv = define('deriv')
    .pos('num', T.any)
    .pos('dnm', T.any)
    .body((p) => inline(unsafeRaw.math.block`(d num) / (d dnm)`))
  return doc(
    importPackage('@preview/problemst:0.1.2', [pset]),
    show(
      pset_with({
        class: '6.100',
        student: 'Alyssa P. Hacker',
        title: 'PSET 0',
        date: datetime.today(),
        collaborators: ['Ben Bitdiddle', 'Louis Reasoner'],
      }),
    ),
    deriv.decl,
    m.lines(
      m.heading(1, 'Definition of the derivative'),
      inline`Something something infinitesimals something something. We can then define the derivative as
the limit of the difference quotient as ${unsafeRaw.math`Delta x arrow 0`}: ${unsafeRaw.math.block`deriv(f(x), x)&= lim_(Delta x arrow 0) (f(x + Delta x) - f(x)) / (Delta x).`}`,
    ),
    m.lines(
      m.heading(2, 'Code!'),
      inline(raw({ block: true, lang: 'go' }, 'import "fmt"\n\nfunc main() {\n  fmt.Println("python sux!!1!")\n}')),
    ),
    m.lines(m.heading(3, 'Subproblem'), 'We can nest subproblems!'),
    m.lines(m.heading(4, 'Subsubproblem'), 'As far as we want!'),
    inline(pagebreak()),
    'We also have a nice little header for the ensuing pages!',
  )
}
