// Converted from test/universe/corpus/axiomst.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  raw,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const homework = external('homework')
  const instructions = define('instructions').pos('arg1', T.content).returns(T.any).external()
  const problem = define('problem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const lemma = define('lemma').pos('arg1', T.content).returns(T.any).external()
  const corollary = define('corollary').pos('arg1', T.content).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).returns(T.any).external()
  const columns_2 = define('columns')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('count', T.any, null)
    .returns(T.any)
    .external()
  const homework_with = define('with')
    .named('author', T.any, null)
    .named('course', T.any, null)
    .named('date', T.any, null)
    .named('email', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(homework)
  return doc(
    importPackage('@preview/axiomst:0.2.1', [
      homework,
      instructions,
      problem,
      solution,
      theorem,
      proof,
      definition,
      lemma,
      corollary,
      example,
      columns_2,
    ]),
    show(
      homework_with({
        title: 'Problem Set 1',
        author: 'Your Name',
        course: 'MATH 101',
        email: 'you@university.edu',
        date: datetime.today(),
      }),
    ),
    inline(instructions(inline`${space}Replace this with your assignment instructions, or delete this block.${space}`)),
    inline(
      problem(
        { title: 'Your First Problem' },
        blocks(
          inline`State the problem here. You can use math: ${unsafeRaw.math`integral_0^1 x^2 dif x = 1/3`}.`,
          m.enum(m.item(['First part of the problem.']), m.item(['Second part of the problem.'])),
        ),
      ),
    ),
    inline(
      solution(inline`${space}Write your solution here. This block can be hidden by setting ${raw('show-solutions: false')}
in the homework configuration.${space}`),
    ),
    inline(theorem({ title: 'A Theorem' }, inline`${space}State your theorem here.${space}`)),
    inline(proof(inline`${space}Write your proof here.${space}`)),
    inline(definition({ title: 'A Definition' }, inline`${space}Define your term here.${space}`)),
    inline(lemma(inline`${space}A supporting lemma.${space}`)),
    inline(corollary(inline`${space}A consequence of the theorem.${space}`)),
    inline(example(inline`${space}An illustrative example.${space}`)),
    inline(
      columns_2(
        { count: 2 },
        inline`${space}Left column content.${space}`,
        inline`${space}Right column content.${space}`,
      ),
    ),
  )
}
