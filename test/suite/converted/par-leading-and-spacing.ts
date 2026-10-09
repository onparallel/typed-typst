// Converted from test/suite/corpus/par-leading-and-spacing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, m, par, pt, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(set(par, { spacing: em(1), leading: pt(2) }), 'But, soft! what light through yonder window breaks?'),
    'It is the east, and Juliet is the sun.',
  )
}
