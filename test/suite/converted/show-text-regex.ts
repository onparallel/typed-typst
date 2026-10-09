// Converted from test/suite/corpus/show-text-regex.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { box, doc, em, h, inline, m, move, regex, show, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      show('TeX', inline`T${h(em(-0.145))}${box(move({ dy: em(0.233) }, inline`E`))}${h(em(-0.135))}X`),
      show(regex('(Lua)?(La)?TeX'), (name, ctx) => box(text({ font: 'New Computer Modern' }, inline(name)))),
    ),
    'TeX, LaTeX, LuaTeX and LuaLaTeX!',
  )
}
