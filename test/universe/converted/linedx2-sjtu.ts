// Converted from test/universe/corpus/linedx2-sjtu.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, em, external, importPackage, inline, lorem, m, par, set, show, text } from '../../../src/index.ts'

export default () => {
  const template = external('template')
  return doc(
    m.lines(importPackage('@preview/linedx2-sjtu:0.1.0', [template]), show(template)),
    m.lines(set(text, { style: 'italic' }), set(par, { justify: true, firstLineIndent: em(2) })),
    'Dear Someone:',
    inline(lorem(200)),
  )
}
