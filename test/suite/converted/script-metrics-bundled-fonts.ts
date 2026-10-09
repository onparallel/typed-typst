// Converted from test/suite/corpus/script-metrics-bundled-fonts.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, codeBlock, define, doc, inline, m, set, space, sub, super_, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const test = define('test')
    .pos('font', T.any)
    .pos('weights', T.any)
    .pos('styles', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  for weight in weights {
    for style in styles {
      text(font: font, weight: weight, style: style)[Xx#super[Xx]#sub[Xx]]
      linebreak()
    }
  }
}`,
    )
  return doc(
    m.lines(set(super_, { typographic: false }), set(sub, { typographic: false })),
    test.decl,
    inline(
      test('DejaVu Sans Mono', ['regular', 'bold'], ['normal', 'oblique']),
      space,
      test('Libertinus Serif', ['regular', 'semibold', 'bold'], ['normal', 'italic']),
      space,
      test('New Computer Modern', ['regular', 'bold'], ['normal', 'italic']),
      space,
      test('New Computer Modern Math', [400, 450, 'bold'], ['normal']),
    ),
  )
}
