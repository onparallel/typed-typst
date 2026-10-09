// Converted from test/universe/corpus/euler-math.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  outline,
  set,
  show,
  smartquote,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const eulerMath = external('euler-math')
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const lemma = define('lemma').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const exercise = define('exercise').pos('arg1', T.content).returns(T.any).external()
  const problem = define('problem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).returns(T.any).external()
  const eulerMath_with = define('with')
    .named('author', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(eulerMath)
  return doc(
    importPackage('@preview/euler-math:0.1.0', [eulerMath, theorem, lemma, proof, exercise, problem, solution]),
    m.lines(
      show(
        eulerMath_with({
          title: inline`Math Olympiad Team Selection Test`,
          subtitle: inline`Training Material and Exams`,
          author: inline`Leonhard Euler`,
        }),
      ),
      set(text, { lang: 'en' }),
    ),
    inline(outline({ title: 'Table of Contents', indent: auto })),
    m.heading(1, 'Modular Number Theory'),
    m.lines(
      m.heading(2, 'Fermat', smartquote({ double: false }), 's Little Theorem'),
      'The foundation of modular number theory for olympiads begins with a classic result on congruences.',
    ),
    inline(
      theorem(
        { title: "Fermat's Little Theorem" },
        inline`${space}Let ${unsafeRaw.math`p`} be a prime number. Then ${unsafeRaw.math`a^(p-1) equiv 1 thick (mod p)`}
for any integer ${unsafeRaw.math`a`} coprime to ${unsafeRaw.math`p`}.${space}`,
      ),
    ),
    inline(
      lemma(
        { title: "Wilson's Theorem" },
        inline`${space}For any prime ${unsafeRaw.math`p`}, we have ${unsafeRaw.math`(p-1)! equiv -1 thick (mod p)`}.${space}`,
      ),
    ),
    inline(
      proof(inline`${space}By associating each element in ${unsafeRaw.math`{1, 2, ..., p-1}`} with its multiplicative
inverse modulo ${unsafeRaw.math`p`}, we note that the only elements that are their own inverses
are ${unsafeRaw.math`1`} and ${unsafeRaw.math`p-1`}. When multiplying everything together, all
other pairs cancel out, leaving ${unsafeRaw.math`1 dot (p-1) equiv -1 thick (mod p)`}.${space}`),
    ),
    m.heading(1, 'Proposed Problems'),
    m.heading(2, 'Basic Level'),
    inline(
      exercise(
        inline`${space}Calculate the remainder when ${unsafeRaw.math`2^2026`} is divided by ${unsafeRaw.math`17`}.${space}`,
      ),
    ),
    m.heading(2, 'Advanced Level'),
    inline(
      problem(
        { title: 'Math Olympiad 2025' },
        inline`${space}Let ${unsafeRaw.math`p`} be an odd prime and ${unsafeRaw.math`x`} be an integer such
that ${unsafeRaw.math`p | x^3 - 1`} but ${unsafeRaw.math`p limits(cancel("|")) x - 1`}. Prove
that ${unsafeRaw.math`p`} divides: ${unsafeRaw.math.block`(p-1)! ( x - x^2/2 + x^3/3 - dots - x^(p-1)/(p-1) )`}${space}`,
      ),
    ),
    inline(
      solution(
        blocks(
          inline`Since ${unsafeRaw.math`p | x^3 - 1 = (x-1)(x^2+x+1)`} and we are given that ${unsafeRaw.math`p limits(cancel("|")) x - 1`},
it must be that ${unsafeRaw.math`p | x^2 + x + 1`}.`,
          inline`We will use the harmonic inverse trick modulo ${unsafeRaw.math`p`}: ${unsafeRaw.math.block`1/k equiv (-1)^(k-1) 1/p binom(p, k) quad (mod p)`}`,
          'Substituting this into the original sum and regrouping terms, the polynomial factors nicely and the resulting coefficients vanish, completing the proof.',
        ),
      ),
    ),
  )
}
