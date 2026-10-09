// Converted from test/universe/corpus/minimal-note.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  codeBlock,
  datetime,
  define,
  doc,
  external,
  h,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  path,
  pct,
  pt,
  ref,
  show,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const minimalNote = external('minimal-note')
  const algorithmFigure = define('algorithm-figure')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .pos('arg7', T.any)
    .pos('arg8', T.any)
    .pos('arg9', T.any)
    .named('inset', T.any, null)
    .returns(T.any)
    .external()
  const algorithmic = external('algorithmic')
  const greenBox = define('green-box').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const orangeBox = define('orange-box').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const minimalNote_with = define('with')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(minimalNote)
  return doc(
    importPackage('@preview/minimal-note:0.10.1', [minimalNote, algorithmFigure, algorithmic, greenBox, orangeBox]),
    show(
      minimalNote_with({
        title: inline`Paper Title`,
        author: inline`Your Name`,
        date: datetime.today().display('[month repr:long], [year]'),
      }),
    ),
    m.heading(1, 'Basic Probability Laws'),
    inline`These probability laws, such as the ${link(label('chain-rule'), 'Chain Rule')} are fundamental.
You can learn more about the link Chain Rule in ${link('https://www.youtube.com/watch?v=wl1myxrtQHQ', 'this video')}.`,
    inline(labelled(heading({ depth: 2 }, inline('Chain Rule')), label('chain-rule'))),
    m.lines(
      inline`For two events ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`}, the ${strong(inline`Chain Rule`)}
states ${unsafeRaw.math.block`PP(A inter B) = PP(B bar A) PP(A).`}`,
      m.heading(2, 'PSRL'),
    ),
    inline`The PSRL algorithm ${ref(label('strens2000bayesian'))} is shown in ${link(label('psrl-alg'), 'Algorithm 1')}.`,
    inline(
      labelled(
        [
          algorithmFigure(
            { inset: pt(3.5) },
            'Posterior Sampling for Reinforcement Learning (PSRL)',
            unsafeRaw.code<any>`{
    import algorithmic: *
    [*Input:* Prior $P(cal(M) in dot)$]
  }`,
            codeBlock([], inline(strong(inline`for`), space, unsafeRaw.math`k in [K]`, space, strong(inline`do`))),
            codeBlock([], inline`${h(pct(2))} Sample ${unsafeRaw.math`M_k ~ PP(cal(M) in dot bar H_k)`}`),
            codeBlock([], inline`${h(pct(2))} Obtain optimal policy ${unsafeRaw.math`pi^k = pi^*_(M_k)`}`),
            codeBlock(
              [],
              inline`${h(pct(2))} Execute ${unsafeRaw.math`pi^{(k)}`} and get trajectory ${unsafeRaw.math`tau_k`}`,
            ),
            codeBlock([], inline`${h(pct(2))} Update history ${unsafeRaw.math`H_{k+1} = H_k union tau_k`}`),
            codeBlock([], inline`${h(pct(2))} Induce posterior ${unsafeRaw.math`P(cal(M) in dot bar H_{k+1})`}`),
            codeBlock([], inline(strong(inline`end for`))),
          ),
          space,
        ],
        label('psrl-alg'),
      ),
    ),
    inline`Now, consider an application of the Chain Rule, mentioned in ${ref(label('chain-rule'))}:`,
    inline(greenBox('Green Box', lorem(100)), space, orangeBox('Orange Box', lorem(100))),
    inline(bibliography({ style: 'institute-of-electrical-and-electronics-engineers' }, path('refs.bib'))),
  )
}
