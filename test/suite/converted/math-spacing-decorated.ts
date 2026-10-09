// Converted from test/suite/corpus/math-spacing-decorated.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, linebreak, m, page, set, space, unsafeRaw } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        unsafeRaw.math`a equiv b + c - d => e log 5 op("ln") 6`,
        space,
        linebreak(),
        space,
        unsafeRaw.math`a cancel(equiv) b overline(+) c arrow(-) d hat(=>) e cancel(log) 5 dot(op("ln")) 6`,
        space,
        linebreak(),
        space,
        unsafeRaw.math`a overbrace(equiv) b underline(+) c grave(-) d underbracket(=>) e circle(log) 5 caron(op("ln")) 6`,
        space,
        linebreak(),
        space,
        linebreak(),
        space,
        unsafeRaw.math`a attach(equiv, tl: a, tr: b) b attach(limits(+), t: a, b: b) c tilde(-) d breve(=>) e attach(limits(log), t: a, b: b) 5 attach(op("ln"), tr: a, bl: b) 6`,
      ),
    ),
  )
}
