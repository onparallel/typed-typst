// Converted from test/universe/corpus/nikonova.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  rgb,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const nikonova = external('nikonova')
  const problem = define('problem').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const final = external('final')
  const nikonova_with = define('with')
    .named('author', T.any, null)
    .named('bg-color', T.any, null)
    .named('email', T.any, null)
    .named('emph-color', T.any, null)
    .named('fg-color', T.any, null)
    .named('font', T.any, null)
    .named('number', T.any, null)
    .named('subsubtitle', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(nikonova)
  return doc(
    importPackage('@preview/nikonova:0.1.1', [
      nikonova,
      { item: 'nikonova-problem', as: problem },
      { item: 'nikonova-final', as: final },
    ]),
    show(
      nikonova_with({
        title: 'Math',
        subtitle: 'Notes and Solutions',
        subsubtitle: 'Algebra',
        number: '1',
        author: 'Annie Nikonova',
        email: 'annie@nikonova.com',
        font: 'New Computer Modern',
        bgColor: rgb('#182133'),
        fgColor: rgb('#a1e3d2'),
        emphColor: rgb('#e3a1b2'),
      }),
    ),
    m.lines(
      m.heading(1, 'Exercises'),
      m.heading(2, 'Evaluate the following integrals.'),
      inline(
        problem(
          inline(space, unsafeRaw.math.block`integral ln x dif x`, space),
          blocks(
            m.lines(
              m.enum(
                m.numbered(
                  1,
                  m.lines(
                    'Find the integral using integration by parts.',
                    m.list(
                      m.item([unsafeRaw.math`u = ln x`, ',', space, unsafeRaw.math`dif u = 1/x dif x`]),
                      m.item([unsafeRaw.math`dif v = dif x`, ',', space, unsafeRaw.math`v = x`]),
                    ),
                  ),
                ),
              ),
              inline(unsafeRaw.math.block`integral ln x dif x
		&= x ln x - integral x/x dif x \\
		&= x ln x - integral dif x`),
            ),
            inline(unsafeRaw.math.block`final(integral ln x dif x = x ln x - x + C)`),
          ),
        ),
      ),
    ),
  )
}
