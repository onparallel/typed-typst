// Converted from test/universe/corpus/texst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, datetime, define, doc, heading, importPackage, inline, outline, show, space } from '../../../src/index.ts'

export default () => {
  const paper = define('paper')
    .pos('arg1', T.any)
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/texst:0.1.2', [paper, theorem, proof]),
    show((doc_2, ctx) =>
      paper(
        {
          title: inline`Paper Title`,
          subtitle: inline`Optional Subtitle`,
          authors: [{ name: inline`Author One` }, { name: inline`Author Two` }],
          date: datetime.today().display('[month repr:long] [day], [year]'),
          abstract: inline`${space}Write a concise abstract summarizing your research question, method, and findings.${space}`,
        },
        doc_2,
      ),
    ),
    inline(outline({ title: inline`Contents` })),
    inline(heading({ level: 1 }, inline`Introduction`)),
    'Start your paper here.',
    inline(heading({ level: 1 }, inline`Main Result`)),
    inline(theorem(inline`${space}State your main theorem or proposition.${space}`)),
    inline(proof(inline`${space}Add your proof or argument.${space}`)),
    inline(heading({ level: 1 }, inline`Appendix`)),
    inline(heading({ level: 2 }, inline`Additional Material`)),
    'Place supplementary derivations, robustness checks, or extended tables here.',
  )
}
