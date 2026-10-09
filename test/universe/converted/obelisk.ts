// Converted from test/universe/corpus/obelisk.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  label,
  labelled,
  m,
  ref,
  show,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const init = external('init')
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const sidenote = define('sidenote').pos('arg1', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  return doc(
    importPackage('@preview/obelisk:0.2.0', [init, definition, sidenote, theorem]),
    show(init),
    m.heading(1, 'Obelisk Template'),
    inline(
      definition(inline`${space}${strong(inline`Obelisk`)} is a note template inspired by Bauhaus aesthetics.${space}`),
    ),
    m.heading(2, 'Second Level Header'),
    'All texts are by default aligned to a baseline grid.',
    inline(unsafeRaw.math.block`integral_0^(+oo) "e"^(-x^2) dif x=sqrt(pi)/2`),
    m.heading(3, 'Third Level Header'),
    inline`The template includes several theorem environments by default. ${sidenote(inline`inline sidenotes can be added`)}
Theorems can have titles and referenced.`,
    inline(
      labelled(
        theorem(
          inline`mean inequality`,
          inline`${space}One of the mean inequalities is ${unsafeRaw.math`n/(sum_(i=1)^n 1/x_i)<=root(n, product_(i=1)^n x_i).`}${space}`,
        ),
        label('thm:mean-ineq'),
      ),
    ),
    inline`Theorems can be referenced by numbering (${ref(label('thm:mean-ineq'))}) or by title (${ref({ supplement: inline`!` }, label('thm:mean-ineq'))}).`,
  )
}
