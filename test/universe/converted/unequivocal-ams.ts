// Converted from test/universe/corpus/unequivocal-ams.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  define,
  doc,
  external,
  figure,
  fr,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  lorem,
  m,
  path,
  pt,
  ref,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const amsArticle = external('ams-article')
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).returns(T.any).external()
  const amsArticle_with = define('with')
    .named('abstract', T.any, null)
    .named('authors', T.any, null)
    .named('bibliography', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(amsArticle)
  return doc(
    importPackage('@preview/unequivocal-ams:0.1.2', [amsArticle, theorem, proof]),
    show(
      amsArticle_with({
        title: inline`Mathematical Theorems`,
        authors: [
          {
            name: 'Janet Doe',
            department: inline`Department of Mathematics`,
            organization: inline`University of Exampleville`,
            location: inline`Tennessee, TN 59341`,
            email: 'jdoe@math.ue.edu',
            url: 'math.ue.edu/~jdoe',
          },
        ],
        abstract: lorem(100),
        bibliography: bibliography(path('refs.bib')),
      }),
    ),
    inline`Call me Ishmael. Some years ago --- never mind how long precisely --- having little or no money
in my purse, and nothing particular to interest me on shore, I thought I would sail about a
little and see the watery part of the world. It is a way I have of driving off the spleen, and
regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it
is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before
coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever
my hypos get such an upper hand of me, that it requires a strong moral principle to prevent
me from deliberately stepping into the street, and methodically knocking people's hats off ---
then, I account it high time to get to sea as soon as I can. This is my substitute for pistol
and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to
the ship. There is nothing surprising in this. If they but knew it, almost all men in their
degree, some time or other, cherish very nearly the same feelings towards the ocean with me.
${ref(label('netwok2020'))}`,
    'There now is your insular city of the Manhattoes, belted round by wharves as Indian isles by coral reefs - commerce surrounds it with her surf. Right and left, the streets take you waterward. Its extreme down-town is the battery, where that noble mole is washed by waves, and cooled by breezes, which a few hours previous were out of sight of land. Look at the crowds of water-gazers there.',
    inline`Anyone caught using formulas such as ${unsafeRaw.math`sqrt(x+y)=sqrt(x)+sqrt(y)`} or ${unsafeRaw.math`1/(x+y) = 1/x + 1/y`}
will fail.`,
    inline`The binomial theorem is ${unsafeRaw.math.block`(x+y)^n=sum_(k=0)^n binom(n, k) x^k y^(n-k).`}`,
    inline`A favorite sum of most mathematicians is ${unsafeRaw.math.block`sum_(n=1)^oo 1/n^2 = pi^2 / 6.`}`,
    inline`Likewise a popular integral is ${unsafeRaw.math.block`integral_(-oo)^oo e^(-x^2) dif x = sqrt(pi)`}`,
    inline(theorem(inline`${space}The square of any real number is non-negative.${space}`)),
    inline(
      proof(inline`${space}Any real number ${unsafeRaw.math`x`} satisfies ${unsafeRaw.math`x > 0`}, ${unsafeRaw.math`x = 0`},
or ${unsafeRaw.math`x < 0`}. If ${unsafeRaw.math`x = 0`}, then ${unsafeRaw.math`x^2 = 0 >= 0`}.
If ${unsafeRaw.math`x > 0`} then as a positive time a positive is positive we have ${unsafeRaw.math`x^2 = x x > 0`}.
If ${unsafeRaw.math`x < 0`} then ${unsafeRaw.math`−x > 0`} and so by what we have just done
${unsafeRaw.math`x^2 = (−x)^2 > 0`}. So in all cases ${unsafeRaw.math`x^2 ≥ 0`}.${space}`),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`This is a new section. You can use tables like ${ref(label('solids'))}.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: 'Solids' },
            table(
              { columns: [fr(1), auto, auto], inset: pt(5), align: horizon },
              table.header(inline(), inline(strong(inline`Area`)), inline(strong(inline`Parameters`))),
              inline(strong(inline`Cylinder`)),
              unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
              inline`${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius`,
              inline(strong(inline`Tetrahedron`)),
              unsafeRaw.math.block`sqrt(2) / 12 a^3`,
              inline`${unsafeRaw.math`a`}: edge length`,
            ),
          ),
          space,
        ],
        label('solids'),
      ),
    ),
    m.lines(m.heading(2, 'Things that need to be done'), inline`Prove theorems, such as ${ref(label('thm'))}.`),
    inline(labelled([theorem(inline`The Riemann hypothesis is true.`), space], label('thm'))),
    inline(proof(inline`This is left as an exercise to the reader, given the complexity of the theorem.`)),
    m.lines(m.heading(1, 'Background'), inline(lorem(40))),
  )
}
