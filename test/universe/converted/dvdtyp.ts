// Converted from test/universe/corpus/dvdtyp.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  center,
  codeBlock,
  define,
  doc,
  em,
  emph,
  external,
  importPackage,
  inline,
  let_,
  lorem,
  m,
  outline,
  pt,
  range,
  raw,
  rect,
  show,
  space,
  spread,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const dvdtyp = external('dvdtyp')
  const problem = define('problem').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const colors = external('colors')
  const dvdtyp_with = define('with')
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external(dvdtyp)
  const colors_at = define('at').pos('arg1', T.any).returns(T.any).external(colors)
  const [numsDecl, nums] = let_('nums', range(16))
  return doc(
    importPackage('@preview/dvdtyp:1.0.1', [dvdtyp, problem, theorem, definition, proof, colors]),
    show(
      dvdtyp_with({
        title: 'dvd.typ',
        subtitle: inline`potato, tomato, banana`,
        author: 'among us',
        abstract: lorem(50),
      }),
    ),
    inline(outline()),
    m.heading(2, 'Colorful wooo!!'),
    inline(problem(inline`${space}Prove that ${unsafeRaw.math`1+1=3`}.${space}`)),
    inline(theorem('Euclid', inline`${space}infinite primes what???${space}`)),
    inline(definition('hi', inline`${space}i define hi as a greeting${space}`)),
    inline(proof(inline(space, unsafeRaw.math.block`"hi"="hello"="greeting"`, space))),
    m.heading(1, 'Making own theorem enviorments'),
    inline`to make your own theorem enviorments, you can use the ${raw('builder-thmbox')} and ${raw('builder-thmline')}
functions to generate ${emph(inline`theorem styles`)} and then use those to make theorems (idk
if this is too convoluted or not, make an issue on github if you have a better idea).`,
    inline`${raw({ block: true, lang: 'typ' }, '#let theorem-style = builder-thmbox(color: colors.at(6), shadow: (offset: (x: 3pt, y: 3pt), color: luma(70%)))\n#let theorem = theorem-style("theorem", "Theorem")\n#let lemma = theorem-style("lemma", "Lemma")\n\n#let definition-style = builder-thmline(color: colors.at(8))\n#let definition = definition-style("definition", "Definition")\n#let proposition = definition-style("proposition", "Proposition")\n')}
There is also a color pallete`,
    inline(
      codeBlock([
        numsDecl,
        align(
          center,
          table(
            { columns: 16, stroke: pt(0), inset: em(0) },
            spread(nums.map((i) => rect({ fill: colors_at(i), width: em(2), height: em(2) }, inline(i)))),
          ),
        ),
      ]),
    ),
  )
}
