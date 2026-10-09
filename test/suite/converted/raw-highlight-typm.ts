// Converted from test/suite/corpus/raw-highlight-typm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, doc, inline, m, page, raw, set } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      inline(
        raw(
          { block: true, lang: 'typm' },
          "1 + 2/3\nsum_(i=1)^n i = (n(n+1))/2\nbinom(n, k) = n!/(k!(n - k)!)\n2 / √(2pi) = sqrt(2) / √pi\n3 * (1 - 2) <= #(3 * (1 + 2))\n((a+b))/((c)^(d')_(e')_(f)'/(g)'/(h)!)\n[\\(a+b\\)]/{\\(c\\)^[d']_{e'}_[|f|]'/[g]'/[\\|h\\|]!}\nf_zeta(x), f_zeta(x)/1, f_zeta (x)\npi.alt + pi^arrow.l.long.double - π = ???\n\"string\" - + * ::= & \\\n|=> & [|define(x-y_z: #1, x::= y; xyz; 0)|]\nstd.text(op(\"Red\"), fill: red)\n#std.text(math.op(\"Red\"), fill: red)",
        ),
      ),
    ),
  )
}
